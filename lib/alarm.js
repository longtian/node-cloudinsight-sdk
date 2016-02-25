const BASE_URL = process.env.BASE_URL || '';

import {stringify} from 'qs';
import * as responseUtil from './response';

export const alarm_strategies = (status)=> {
  return fetch(`${BASE_URL}/alarm/strategy/alarmStrategies.json?${stringify({
    status
  })}`).then(responseUtil.toJSON);
}

export const alarm_strategie = (id)=> {
  return fetch(`${BASE_URL}/alarm/strategy/${id}/alarmStrategy.json`).then(responseUtil.toJSON);
}

export const alarm_strategie_status = (id, windowTime = 3600000)=> {
  return fetch(`${BASE_URL}/alarm/${id}/message/list.json?${stringify({
    windowTime
  })}`).then(responseUtil.toJSON)
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

export const alarm_events = (windowTime = 3600000)=> {
  return fetch(`${BASE_URL}/alarm/eventStream/list.json?${stringify({
    windowTime
  })}`).then(responseUtil.toJSON);
}