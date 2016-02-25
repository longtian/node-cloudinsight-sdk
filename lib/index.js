/**
 * Created by yan on 16-2-22.
 */
const BASE_URL = process.env.BASE_URL || '';

import {stringify} from 'qs';
import fetch from 'isomorphic-fetch';
import * as responseUtil from './response';

export * from './dashboard';
export * from './alarm';

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

export const metrics = ()=> {
  return fetch(`${BASE_URL}/metrics.json`).then(responseUtil.toJSON);
}

export const tags = ()=> {
  return fetch(`${BASE_URL}/tags.json`).then(responseUtil.toJSON);
}



export const emails = (status)=> {
  return fetch(`${BASE_URL}/mailtos.json`).then(responseUtil.toJSON);
}

export const webhooks = (status)=> {
  return fetch(`${BASE_URL}/webhook/list.json`).then(responseUtil.toJSON);
}