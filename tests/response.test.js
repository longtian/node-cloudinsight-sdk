import {ok,throws,deepEqual} from 'assert';
import * as responseUtil from '../lib/response';

describe('toJSON', ()=> {
  describe('in case of unsuccess status code', ()=> {

    it('should throw if 4xx', ()=> {
      throws(()=> {
        responseUtil.toJSON({
          statusCode: 404
        })
      })
    });

    it('should throw if 5xx', ()=> {
      throws(()=> {
        responseUtil.toJSON({
          statusCode: 404
        })
      })
    })

  })


  describe('in case of success status code', ()=> {
    it('', ()=> {
      responseUtil.toJSON({
        status: 200,
        json: ()=> {
          return Promise.resolve({
            code: 1
          })
        }
      })
    })
  });


  describe('extractMetrics', ()=> {
    it('should work if all metrics provide', ()=> {

      deepEqual({
        cpu: 1,
        load15: 1,
        iowait: 1
      }, responseUtil.extractMetrics({
        metrics: [
          ["system.cpu.idle", 0, "99"],
          ["system.load.15", 0, "1"],
          ["system.cpu.iowait", 0, "1"]
        ]
      }))

    })

    it('should work if no metrics provide', ()=> {

      deepEqual({
        cpu: 0,
        load15: 0,
        iowait: 0
      }, responseUtil.extractMetrics({
        metrics: []
      }))

    })
  })

  describe('extractApps', ()=> {
    it('should have at least system if no apps provided', () => {
      let input = {
        apps: [],
        agent_checks: {
          check_result: []
        }
      }
      deepEqual([{name: 'system', status: 'UNKNOWN'}], responseUtil.extractApps(input).apps);
    })

    it('works with app mysql:ok', () => {
      let input = {
        apps: ["system", "mysql"],
        agent_checks: {
          check_result: [
            {
              service: "mysql",
              status: "OK"
            },
            {
              service: "system",
              status: "OK"
            }]
        }
      }
      deepEqual([
        {
          name: 'system',
          status: 'OK'
        },
        {
          name: 'mysql',
          status: 'OK'
        }
      ], responseUtil.extractApps(input).apps);
    })

    it('works with app mysql:error', () => {
      let input = {
        apps: ["system"],
        agent_checks: {
          check_result: [
            {
              service: "mysql",
              status: "ERROR"
            },
            {
              service: "system",
              status: "OK"
            }]
        }
      }
      deepEqual([
        {
          name: 'system',
          status: 'OK'
        },
        {
          name: 'mysql',
          status: 'ERROR'
        }
      ], responseUtil.extractApps(input).apps);
    })


    it('works with docker_daemon mysql', () => {
      let input = {
        apps: ["system", "docker"],
        agent_checks: {
          check_result: [
            {
              service: "system",
              status: "OK"
            },
            {
              service: "docker_daemon",
              status: "OK"
            }]
        }
      }
      deepEqual([
        {
          name: 'system',
          status: 'OK'
        },
        {
          name: 'docker',
          status: 'OK'
        }
      ], responseUtil.extractApps(input).apps);
    })

    it('should not have oneapm', () => {
      let input = {
        apps: ["system"],
        agent_checks: {
          check_result: [
            {
              service: "system",
              status: "OK"
            },
            {
              service: "oneapm",
              status: "OK"
            }]
        }
      }
      deepEqual([
        {
          name: 'system',
          status: 'OK'
        }
      ], responseUtil.extractApps(input).apps);
    })


    it('should overide existing status', () => {
      let input = {
        apps: ["system"],
        agent_checks: {
          check_result: [
            {
              service: "system",
              status: "ERROR"
            },
            {
              service: "system",
              status: "OK"
            }]
        }
      }
      deepEqual([
        {
          name: 'system',
          status: 'OK'
        }
      ], responseUtil.extractApps(input).apps);
    })
  })

})