/**
 * Created by yan on 16-2-24.
 */

import * as API from '../lib/index';
import {ok} from 'assert';
import nock from 'nock';

describe('API', ()=> {
  it('should be defined', ()=> {
    nock(process.env.BASE_URL).get(/^\/overview/).reply(200, {
      code: 0,
      result: {
        datum: []
      }
    });
    return API.hosts()
  });
});