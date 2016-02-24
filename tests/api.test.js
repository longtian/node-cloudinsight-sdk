/**
 * Created by yan on 16-2-24.
 */

import * as API from '../lib/index';
import {ok} from 'assert';

describe('API', ()=> {
  it('should be defined', ()=> {
    ok(Object.keys(API).length > 1);
  });
});