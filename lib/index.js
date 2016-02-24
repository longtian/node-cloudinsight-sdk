/**
 * Created by yan on 16-2-22.
 */
import {stringify} from 'qs';
import {toJSON} from './toJSON';

export const hosts = (hostNames)=> {
  let params = stringify({
    offset: 0,
    limit: 20000,
    q: "avg:system.cpu.idle,avg:system.load.15,avg:system.cpu.iowait",
    windowTime: 600,
    showTime: 259200,
    hostNames
  });

  return fetch(`/overview.json?${params}`)
    .then(res=>res.json())
    .then(res=>res.result.datum);
}

export const dashboards = (type, windowTime = 86400)=> {

  let params = stringify({
    type,
    windowTime
  });

  return fetch(`/dashboards.json?${params}`).then(toJSON)
}

export const dashboard = (id) => {
  return fetch(`/dashboards/${id}/show.json`).then(toJSON);
}

export const dashboard_params = (id) => {
  return fetch(`/dashboards/${id}/params.json`).then(toJSON);
}

export const dashboard_charts = (id) => {
  return fetch(`/dashboards/${id}/charts.json`).then(toJSON);
}

export const dashboard_clone = (id, dashboardName)=> {
  return fetch(`/dashboards/${id}/clone.json`, {
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: stringify({
      dashboardName,
      dashboardDesc: '仪表盘描述'
    })
  }).then(toJSON)
}

export const dashboard_remove = (id) => {
  return fetch(`/dashboards/${id}/delete.json`, {
    method: 'post'
  }).then(toJSON)
}

export const dashboard_create = (name)=> {
  return fetch(`/dashboards/add.json`, {
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: stringify({
      dashboardName: name,
      type: 'user'
    })
  }).then(toJSON)
}

export const dashboard_update = (id, propsDict)=> {
  return fetch(`/dashboards/${id}/update.json`, {
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: stringify(propsDict)
  }).then(toJSON)
}

export const dashboard_params_update = (id, params) => {
  return fetch(`/dashboards/${id}/params.json`, {
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: stringify({
      params: JSON.stringify(params)
    })
  }).then(toJSON)
}

export const dashboard_favourite_update = (id, favorite)=> {

  return fetch(`/dashboards/${id}/favorite.json`, {
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: stringify({
      favorite
    })
  }).then(toJSON)

}

export const metrics = ()=> {
  return fetch('/metrics.json').then(toJSON);
}

export const tags = ()=> {
  return fetch('/tags.json').then(toJSON);
}

export const events = (windowTime = 3600000)=> {
  return fetch(`/alarm/eventStream/list.json?${stringify({
    windowTime
  })}`).then(toJSON);
}

export const alarm_strategies = (status)=> {
  return fetch(`/alarm/strategy/alarmStrategies.json?${stringify({
    status
  })}`).then(toJSON);
}

export const alarm_strategie = (id)=> {
  return fetch(`/alarm/strategy/${id}/alarmStrategy.json`).then(toJSON);
}

export const alarm_strategie_status = (id, windowTime = 3600000)=> {
  return fetch(`/alarm/${id}/message/list.json?windowTime=3600000`).then(toJSON)
}

export const alarm_strategie_related = (id)=> {
  return fetch(`/alarm/strategy/${id}/relatedAlarmStrategies.json`).then(toJSON);
}

export const alarm_strategies_enable = (ids)=> {
  return fetch(`/alarm/strategy/disable.json`, {
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: stringify({
      strategyIds: ids.toString(),
      disable: false
    })
  }).then(toJSON)
}

export const alarm_strategies_disable = (ids)=> {
  return fetch(`/alarm/strategy/disable.json`, {
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: stringify({
      strategyIds: ids.toString(),
      disable: true
    })
  }).then(toJSON)
}

export const emails = (status)=> {
  return fetch(`/mailtos.json`).then(toJSON);
}

export const webhooks = (status)=> {
  return fetch(`/webhook/list.json`).then(toJSON);
}