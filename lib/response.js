/**
 * Created by yan on 16-2-25.
 */
const APP_BLACKLIST = ['datadog', 'oneapm', 'proc', 'wmi', 'disk', 'win32'];
const APP_NO_SPLITTING = ['php_fpm'];

const APP_STATUS = {
  UNKNOWN: 'UNKNOWN',
  OK: 'OK',
  ERROR: 'ERROR',
  WARNING: 'WARNING'
}


export const extractApps = item => {
  let apps = item.apps || [];
  let check_result = item.agent_checks && item.agent_checks.check_result || [];

  // 所有主机默认至少有一个 APP 为 system
  let appsDict = {
    "system": {
      status: APP_STATUS.UNKNOWN
    }
  };

  // 所有的 app 默认状态为 UNKNOWN
  apps.forEach(app=> {
    appsDict[app] = {
      status: APP_STATUS.UNKNOWN
    }
  });

  check_result.forEach(result=> {
    let appName = result.service;

    if (APP_NO_SPLITTING.indexOf(appName) == -1) {
      appName = appName.split('_')[0];
    }

    if (appsDict[appName]) {
      appsDict[appName].status = result.status;
    } else {
      appsDict[appName] = {
        status: result.status
      }
    }
  })

  // 根据黑名单隐藏一部分
  item.apps = Object.keys(appsDict)
    .filter(app=>APP_BLACKLIST.indexOf(app) == -1)
    .map(app=>({
      name: app,
      ...appsDict[app]
    }));

  return item;

}

export const extractMetrics = item => {

  item.metrics.forEach(m=> {
    switch (m[0]) {
      case 'system.cpu.idle':
        item.cpu = 100 - parseFloat(m[2]);
        break;
      case 'system.load.15':
        item.load15 = parseFloat(m[2]);
        break;
      case 'system.cpu.iowait':
        item.iowait = parseFloat(m[2]);
        break;
    }
  });

  ['cpu', 'load15', 'iowait'].forEach(prop=> {
    if (!(prop in item)) {
      item[prop] = 0;
    }
  })

  delete item.metrics;

  return item;
}

export const toJSON = (res)=> {
  if (!/^2/.test(res.status)) {
    throw new Error(res.statusText);
  } else {
    return res.json().then(res=> {
      if (res.code != 0) {
        throw new Error(res.message);
      } else {
        return res.result;
      }
    });
  }
}


