/**
 * Created by yan on 16-2-22.
 */
const BASE_URL = process.env.BASE_URL || '';

import {stringify} from 'qs';
import fetch from 'isomorphic-fetch';
import * as responseUtil from './response';

export const hosts = (hostNames)=> {
  let params = stringify({
    offset: 0,
    limit: 20000,
    q: "avg:system.cpu.idle,avg:system.load.15,avg:system.cpu.iowait",
    windowTime: 600,
    showTime: 259200,
    hostNames
  });

  return fetch(`${BASE_URL}/overview.json?${params}`)
    .then(responseUtil.toJSON)
    .then(res=>res.datum)
    .then(res=>res.map(responseUtil.extractMetrics))
    .then(res=>res.map(responseUtil.extractApps));
}

export const dashboards = (type, windowTime = 86400)=> {

  let params = stringify({
    type,
    windowTime
  });

  return fetch(`${BASE_URL}/dashboards.json?${params}`).then(responseUtil.toJSON)
}

export const dashboard = (id) => {
  return fetch(`${BASE_URL}/dashboards/${id}/show.json`).then(responseUtil.toJSON);
}

export const dashboard_params = (id) => {
  return fetch(`${BASE_URL}/dashboards/${id}/params.json`).then(responseUtil.toJSON);
}

export const dashboard_charts = (id) => {
  return fetch(`${BASE_URL}/dashboards/${id}/charts.json`).then(responseUtil.toJSON);
}

export const dashboard_clone = (id, dashboardName)=> {
  return fetch(`${BASE_URL}/dashboards/${id}/clone.json`, {
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: stringify({
      dashboardName,
      dashboardDesc: '仪表盘描述'
    })
  }).then(responseUtil.toJSON)
}

export const dashboard_remove = (id) => {
  return fetch(`${BASE_URL}/dashboards/${id}/delete.json`, {
    method: 'post'
  }).then(responseUtil.toJSON)
}

export const dashboard_create = (name)=> {
  return fetch(`${BASE_URL}/dashboards/add.json`, {
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: stringify({
      dashboardName: name,
      type: 'user'
    })
  }).then(responseUtil.toJSON)
}

export const dashboard_update = (id, propsDict)=> {
  return fetch(`${BASE_URL}/dashboards/${id}/update.json`, {
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: stringify(propsDict)
  }).then(responseUtil.toJSON)
}

export const dashboard_params_update = (id, params) => {
  return fetch(`${BASE_URL}/dashboards/${id}/params.json`, {
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: stringify({
      params: JSON.stringify(params)
    })
  }).then(responseUtil.toJSON)
}

export const dashboard_favourite_update = (id, favorite)=> {

  return fetch(`${BASE_URL}/dashboards/${id}/favorite.json`, {
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: stringify({
      favorite
    })
  }).then(responseUtil.toJSON)

}

export const metrics = ()=> {
  return fetch(`${BASE_URL}/metrics.json`).then(responseUtil.toJSON);
}

export const tags = ()=> {
  return fetch(`${BASE_URL}/tags.json`).then(responseUtil.toJSON);
}

export const events = (windowTime = 3600000)=> {
  return fetch(`${BASE_URL}/alarm/eventStream/list.json?${stringify({
    windowTime
  })}`).then(responseUtil.toJSON);
}

export const alarm_strategies = (status)=> {
  return fetch(`${BASE_URL}/alarm/strategy/alarmStrategies.json?${stringify({
    status
  })}`).then(responseUtil.toJSON);
}

export const alarm_strategie = (id)=> {
  return fetch(`${BASE_URL}/alarm/strategy/${id}/alarmStrategy.json`).then(responseUtil.toJSON);
}

export const alarm_strategie_status = (id, windowTime = 3600000)=> {
  return fetch(`${BASE_URL}/alarm/${id}/message/list.json?windowTime=3600000`).then(responseUtil.toJSON)
}

export const alarm_strategie_related = (id)=> {
  return fetch(`${BASE_URL}/alarm/strategy/${id}/relatedAlarmStrategies.json`).then(responseUtil.toJSON);
}

export const alarm_strategies_enable = (ids)=> {
  return fetch(`${BASE_URL}/alarm/strategy/disable.json`, {
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: stringify({
      strategyIds: ids.toString(),
      disable: false
    })
  }).then(responseUtil.toJSON)
}

export const alarm_strategies_disable = (ids)=> {
  return fetch(`${BASE_URL}/alarm/strategy/disable.json`, {
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: stringify({
      strategyIds: ids.toString(),
      disable: true
    })
  }).then(responseUtil.toJSON)
}

export const emails = (status)=> {
  return fetch(`${BASE_URL}/mailtos.json`).then(responseUtil.toJSON);
}

export const webhooks = (status)=> {
  return fetch(`${BASE_URL}/webhook/list.json`).then(responseUtil.toJSON);
}