/**
 * Created by yan on 16-2-24.
 */

import * as API from '../lib/index';
import {ok} from 'assert';
import nock from 'nock';

describe('API', ()=> {
  it('hosts', ()=> {
    nock(process.env.BASE_URL).get(/^\/overview/).reply(200, {
      code: 0,
      result: {
        datum: []
      }
    });
    return API.hosts()
  });

  it('emails', ()=> {
    nock(process.env.BASE_URL).get('/mailtos.json').reply(200, {
      code: 0,
      result: []
    });
    return API.emails()
  });

  it('webhooks', ()=> {
    nock(process.env.BASE_URL).get('/webhook/list.json').reply(200, {
      code: 0,
      result: []
    });
    return API.webhooks()
  });

  it('tags', ()=> {
    nock(process.env.BASE_URL).get('/tags.json').reply(200, {
      code: 0,
      result: []
    });
    return API.tags()
  });

  it('metrics', ()=> {
    nock(process.env.BASE_URL).get('/metrics.json').reply(200, {
      code: 0,
      result: []
    });
    return API.metrics()
  });

  it('dashboards', ()=> {
    nock(process.env.BASE_URL).get('/dashboards.json?type=user&windowTime=86400').reply(200, {
      code: 0,
      result: []
    });
    return API.dashboards('user')
  });

  it('dashboard detail', ()=> {
    nock(process.env.BASE_URL).get('/dashboards/1/show.json').reply(200, {
      code: 0,
      result: []
    });
    return API.dashboard(1)
  });

  it('dashboard params', ()=> {
    nock(process.env.BASE_URL).get('/dashboards/1/params.json').reply(200, {
      code: 0,
      result: []
    });
    return API.dashboard_params(1)
  });

  it('dashboard charts', ()=> {
    nock(process.env.BASE_URL).get('/dashboards/1/charts.json').reply(200, {
      code: 0,
      result: []
    });
    return API.dashboard_charts(1)
  });


  it('alarm_strategies_enable', ()=> {
    nock(process.env.BASE_URL).post('/alarm/strategy/disable.json').reply(200, {
      code: 0,
      result: []
    });
    return API.alarm_strategies_enable(1)
  });

  it('alarm_strategies_disable', ()=> {
    nock(process.env.BASE_URL).post('/alarm/strategy/disable.json').reply(200, {
      code: 0,
      result: []
    });
    return API.alarm_strategies_disable(1)
  });
});