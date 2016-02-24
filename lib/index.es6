/**
 * Created by yan on 16-2-22.
 */
import {stringify} from 'qs';

export const hosts = ()=> {
  let params = stringify({
    offset: 0,
    limit: 20000,
    q: "avg:system.cpu.idle,avg:system.load.15,avg:system.cpu.iowait",
    windowTime: 600,
    showTime: 259200
  });

  return fetch(`overview.json?${params}`, {})
    .then(res=>res.json())
    .then(res=>res.result.datum);
}


export const dashboards = ({
  type="user",
  windowTime=86400
  })=> {

  let params = stringify({
    type,
    windowTime
  });

  return fetch(`/dashboards.json?${params}`)
}


export const setDashboardFavorite = (id, favorite)=> {

  return fetch(`/dashboards/${id}/favorite.json`, {
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: stringify({
      favorite
    })
  })

}