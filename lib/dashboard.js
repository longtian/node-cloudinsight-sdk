const BASE_URL = process.env.BASE_URL || '';

import {stringify} from 'qs';
import * as responseUtil from './response';

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