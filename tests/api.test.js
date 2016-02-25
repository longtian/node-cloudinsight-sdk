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


  it('alarm_strategie_related', ()=> {
    nock(process.env.BASE_URL).get('/alarm/strategy/1/relatedAlarmStrategies.json').reply(200, {
      code: 0,
      result: []
    });
    return API.alarm_strategie_related(1)
  });

  it('alarm_strategie_status', ()=> {
    nock(process.env.BASE_URL).get('/alarm/1/message/list.json?windowTime=3600000').reply(200, {
      code: 0,
      result: []
    });
    return API.alarm_strategie_status(1)
  });


  it('dashboard_clone', ()=> {
    nock(process.env.BASE_URL).post('/dashboards/1/clone.json').reply(200, {
      code: 0,
      result: []
    });
    return API.dashboard_clone(1, 'XXX')
  })
  it('dashboard_remove', ()=> {
    nock(process.env.BASE_URL).post('/dashboards/1/delete.json').reply(200, {
      code: 0,
      result: []
    });
    return API.dashboard_remove(1)
  })
  it('dashboard_create', ()=> {
    nock(process.env.BASE_URL).post('/dashboards/add.json').reply(200, {
      code: 0,
      result: []
    });
    return API.dashboard_create('N')
  })
  it('dashboard_update', ()=> {
    nock(process.env.BASE_URL).post('/dashboards/1/update.json').reply(200, {
      code: 0,
      result: []
    });
    return API.dashboard_update(1, {
      dashboardName: 'xxx'
    })
  })
  it('alarm_events', ()=> {
    nock(process.env.BASE_URL).get('/alarm/eventStream/list.json?windowTime=9587').reply(200, {
      code: 0,
      result: []
    });
    return API.alarm_events(9587)
  })

  it('alarm_strategies', ()=> {
    nock(process.env.BASE_URL).get('/alarm/strategy/alarmStrategies.json?').reply(200, {
      code: 0,
      result: []
    });
    return API.alarm_strategies()
  })
  it('alarm_strategies with status', ()=> {
    nock(process.env.BASE_URL).get('/alarm/strategy/alarmStrategies.json?status=1%2C2').reply(200, {
      code: 0,
      result: []
    });
    return API.alarm_strategies('1,2')
  })
  it('alarm_strategie', ()=> {
    nock(process.env.BASE_URL).get('/alarm/strategy/1/alarmStrategy.json').reply(200, {
      code: 0,
      result: []
    });
    return API.alarm_strategie(1)
  })
  it('dashboard_params_update', ()=> {
    nock(process.env.BASE_URL).post('/dashboards/1/params.json').reply(200, {
      code: 0,
      result: []
    });
    return API.dashboard_params_update(1, [])
  })
  it('dashboard_favourite_update', ()=> {
    nock(process.env.BASE_URL).post('/dashboards/1/favorite.json').reply(200, {
      code: 0,
      result: []
    });
    return API.dashboard_favourite_update(1, true)
  })
});