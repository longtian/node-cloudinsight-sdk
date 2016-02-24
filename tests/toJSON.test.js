import {ok,throws} from 'assert';
import toJSON from '../lib/toJSON';

describe('toJSON', ()=> {
  describe('in case of unsuccess status code', ()=> {

    it('should throw if 4xx', ()=> {
      throws(()=> {
        toJSON({
          statusCode: 404
        })
      })
    });

    it('should throw if 5xx', ()=> {
      throws(()=> {
        toJSON({
          statusCode: 404
        })
      })
    })

  })


  describe('in case of success status code', ()=> {
    it('', ()=> {
      toJSON({
        status: 200,
        json: ()=> {
          return Promise.resolve({
            code: 1
          })
        }
      })
    })
  })
})