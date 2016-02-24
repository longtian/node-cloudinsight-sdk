'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.webhooks=exports.emails=exports.alarm_strategies_disable=exports.alarm_strategies_enable=exports.alarm_strategie_related=exports.alarm_strategie_status=exports.alarm_strategie=exports.alarm_strategies=exports.events=exports.tags=exports.metrics=exports.dashboard_favourite_update=exports.dashboard_params_update=exports.dashboard_update=exports.dashboard_create=exports.dashboard_remove=exports.dashboard_clone=exports.dashboard_charts=exports.dashboard_params=exports.dashboard=exports.dashboards=exports.hosts=undefined;var _qs=require('qs');var toJSON=function toJSON(res){if(!/^2/.test(res.status)){throw new Error(res.statusText)}else {return res.json().then(function(res){if(res.code!=0){throw new Error(res.message)}else {return res.result}})}};var hosts=exports.hosts=function hosts(hostNames){var params=(0,_qs.stringify)({offset:0,limit:20000,q:'avg:system.cpu.idle,avg:system.load.15,avg:system.cpu.iowait',windowTime:600,showTime:259200,hostNames:hostNames});return fetch('/overview.json?'+params).then(function(res){return res.json()}).then(function(res){return res.result.datum})};var dashboards=exports.dashboards=function dashboards(type){var windowTime=arguments.length<=1||arguments[1]===undefined?86400:arguments[1];var params=(0,_qs.stringify)({type:type,windowTime:windowTime});return fetch('/dashboards.json?'+params).then(toJSON)};var dashboard=exports.dashboard=function dashboard(id){return fetch('/dashboards/'+id+'/show.json').then(toJSON)};var dashboard_params=exports.dashboard_params=function dashboard_params(id){return fetch('/dashboards/'+id+'/params.json').then(toJSON)};var dashboard_charts=exports.dashboard_charts=function dashboard_charts(id){return fetch('/dashboards/'+id+'/charts.json').then(toJSON)};var dashboard_clone=exports.dashboard_clone=function dashboard_clone(id,dashboardName){return fetch('/dashboards/'+id+'/clone.json',{method:'post',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:(0,_qs.stringify)({dashboardName:dashboardName,dashboardDesc:'仪表盘描述'})}).then(toJSON)};var dashboard_remove=exports.dashboard_remove=function dashboard_remove(id){return fetch('/dashboards/'+id+'/delete.json',{method:'post'}).then(toJSON)};var dashboard_create=exports.dashboard_create=function dashboard_create(name){return fetch('/dashboards/add.json',{method:'post',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:(0,_qs.stringify)({dashboardName:name,type:'user'})}).then(toJSON)};var dashboard_update=exports.dashboard_update=function dashboard_update(id,propsDict){return fetch('/dashboards/'+id+'/update.json',{method:'post',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:(0,_qs.stringify)(propsDict)}).then(toJSON)};var dashboard_params_update=exports.dashboard_params_update=function dashboard_params_update(id,params){return fetch('/dashboards/'+id+'/params.json',{method:'post',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:(0,_qs.stringify)({params:JSON.stringify(params)})}).then(toJSON)};var dashboard_favourite_update=exports.dashboard_favourite_update=function dashboard_favourite_update(id,favorite){return fetch('/dashboards/'+id+'/favorite.json',{method:'post',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:(0,_qs.stringify)({favorite:favorite})}).then(toJSON)};var metrics=exports.metrics=function metrics(){return fetch('/metrics.json').then(toJSON)};var tags=exports.tags=function tags(){return fetch('/tags.json').then(toJSON)};var events=exports.events=function events(){var windowTime=arguments.length<=0||arguments[0]===undefined?3600000:arguments[0];return fetch('/alarm/eventStream/list.json?'+(0,_qs.stringify)({windowTime:windowTime})).then(toJSON)};var alarm_strategies=exports.alarm_strategies=function alarm_strategies(status){return fetch('/alarm/strategy/alarmStrategies.json?'+(0,_qs.stringify)({status:status})).then(toJSON)};var alarm_strategie=exports.alarm_strategie=function alarm_strategie(id){return fetch('/alarm/strategy/'+id+'/alarmStrategy.json').then(toJSON)};var alarm_strategie_status=exports.alarm_strategie_status=function alarm_strategie_status(id){var windowTime=arguments.length<=1||arguments[1]===undefined?3600000:arguments[1];return fetch('/alarm/'+id+'/message/list.json?windowTime=3600000').then(toJSON)};var alarm_strategie_related=exports.alarm_strategie_related=function alarm_strategie_related(id){return fetch('/alarm/strategy/'+id+'/relatedAlarmStrategies.json').then(toJSON)};var alarm_strategies_enable=exports.alarm_strategies_enable=function alarm_strategies_enable(ids){return fetch('/alarm/strategy/disable.json',{method:'post',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:(0,_qs.stringify)({strategyIds:ids.toString(),disable:false})}).then(toJSON)};var alarm_strategies_disable=exports.alarm_strategies_disable=function alarm_strategies_disable(ids){return fetch('/alarm/strategy/disable.json',{method:'post',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:(0,_qs.stringify)({strategyIds:ids.toString(),disable:true})}).then(toJSON)};var emails=exports.emails=function emails(status){return fetch('/mailtos.json').then(toJSON)};var webhooks=exports.webhooks=function webhooks(status){return fetch('/webhook/list.json').then(toJSON)};
//# sourceMappingURL=data:application/json;base64,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Tyx1QkFBdUIsSUFBdkIsQ0FBNEIsTUFBNUIsQ0FBUCxDQUQrQixDQUkxQixJQUFNLDBCQUFXLFNBQVgsUUFBVyxDQUFDLE1BQUQsQ0FBVyxDQUNqQyxPQUFPLDRCQUE0QixJQUE1QixDQUFpQyxNQUFqQyxDQUFQLENBRGlDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHlhbiBvbiAxNi0yLTIyLlxuICovXG5pbXBvcnQge3N0cmluZ2lmeX0gZnJvbSAncXMnO1xuXG4vKipcbiAqIEBwYXJhbSByZXNcbiAqIEB0aHJvdyDlpoLmnpzkuI3mmK8gMnh4IOWwseaKpemUmVxuICovXG5jb25zdCB0b0pTT04gPSAocmVzKT0+IHtcbiAgaWYgKCEvXjIvLnRlc3QocmVzLnN0YXR1cykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocmVzLnN0YXR1c1RleHQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXMuanNvbigpLnRoZW4ocmVzPT4ge1xuICAgICAgaWYgKHJlcy5jb2RlICE9IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlcy5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXMucmVzdWx0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBob3N0cyA9IChob3N0TmFtZXMpPT4ge1xuICBsZXQgcGFyYW1zID0gc3RyaW5naWZ5KHtcbiAgICBvZmZzZXQ6IDAsXG4gICAgbGltaXQ6IDIwMDAwLFxuICAgIHE6IFwiYXZnOnN5c3RlbS5jcHUuaWRsZSxhdmc6c3lzdGVtLmxvYWQuMTUsYXZnOnN5c3RlbS5jcHUuaW93YWl0XCIsXG4gICAgd2luZG93VGltZTogNjAwLFxuICAgIHNob3dUaW1lOiAyNTkyMDAsXG4gICAgaG9zdE5hbWVzXG4gIH0pO1xuXG4gIHJldHVybiBmZXRjaChgL292ZXJ2aWV3Lmpzb24/JHtwYXJhbXN9YClcbiAgICAudGhlbihyZXM9PnJlcy5qc29uKCkpXG4gICAgLnRoZW4ocmVzPT5yZXMucmVzdWx0LmRhdHVtKTtcbn1cblxuZXhwb3J0IGNvbnN0IGRhc2hib2FyZHMgPSAodHlwZSwgd2luZG93VGltZSA9IDg2NDAwKT0+IHtcblxuICBsZXQgcGFyYW1zID0gc3RyaW5naWZ5KHtcbiAgICB0eXBlLFxuICAgIHdpbmRvd1RpbWVcbiAgfSk7XG5cbiAgcmV0dXJuIGZldGNoKGAvZGFzaGJvYXJkcy5qc29uPyR7cGFyYW1zfWApLnRoZW4odG9KU09OKVxufVxuXG5leHBvcnQgY29uc3QgZGFzaGJvYXJkID0gKGlkKSA9PiB7XG4gIHJldHVybiBmZXRjaChgL2Rhc2hib2FyZHMvJHtpZH0vc2hvdy5qc29uYCkudGhlbih0b0pTT04pO1xufVxuXG5leHBvcnQgY29uc3QgZGFzaGJvYXJkX3BhcmFtcyA9IChpZCkgPT4ge1xuICByZXR1cm4gZmV0Y2goYC9kYXNoYm9hcmRzLyR7aWR9L3BhcmFtcy5qc29uYCkudGhlbih0b0pTT04pO1xufVxuXG5leHBvcnQgY29uc3QgZGFzaGJvYXJkX2NoYXJ0cyA9IChpZCkgPT4ge1xuICByZXR1cm4gZmV0Y2goYC9kYXNoYm9hcmRzLyR7aWR9L2NoYXJ0cy5qc29uYCkudGhlbih0b0pTT04pO1xufVxuXG5leHBvcnQgY29uc3QgZGFzaGJvYXJkX2Nsb25lID0gKGlkLCBkYXNoYm9hcmROYW1lKT0+IHtcbiAgcmV0dXJuIGZldGNoKGAvZGFzaGJvYXJkcy8ke2lkfS9jbG9uZS5qc29uYCwge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCd9LFxuICAgIGJvZHk6IHN0cmluZ2lmeSh7XG4gICAgICBkYXNoYm9hcmROYW1lLFxuICAgICAgZGFzaGJvYXJkRGVzYzogJ+S7quihqOebmOaPj+i/sCdcbiAgICB9KVxuICB9KS50aGVuKHRvSlNPTilcbn1cblxuZXhwb3J0IGNvbnN0IGRhc2hib2FyZF9yZW1vdmUgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGZldGNoKGAvZGFzaGJvYXJkcy8ke2lkfS9kZWxldGUuanNvbmAsIHtcbiAgICBtZXRob2Q6ICdwb3N0J1xuICB9KS50aGVuKHRvSlNPTilcbn1cblxuZXhwb3J0IGNvbnN0IGRhc2hib2FyZF9jcmVhdGUgPSAobmFtZSk9PiB7XG4gIHJldHVybiBmZXRjaChgL2Rhc2hib2FyZHMvYWRkLmpzb25gLCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ30sXG4gICAgYm9keTogc3RyaW5naWZ5KHtcbiAgICAgIGRhc2hib2FyZE5hbWU6IG5hbWUsXG4gICAgICB0eXBlOiAndXNlcidcbiAgICB9KVxuICB9KS50aGVuKHRvSlNPTilcbn1cblxuZXhwb3J0IGNvbnN0IGRhc2hib2FyZF91cGRhdGUgPSAoaWQsIHByb3BzRGljdCk9PiB7XG4gIHJldHVybiBmZXRjaChgL2Rhc2hib2FyZHMvJHtpZH0vdXBkYXRlLmpzb25gLCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ30sXG4gICAgYm9keTogc3RyaW5naWZ5KHByb3BzRGljdClcbiAgfSkudGhlbih0b0pTT04pXG59XG5cbmV4cG9ydCBjb25zdCBkYXNoYm9hcmRfcGFyYW1zX3VwZGF0ZSA9IChpZCwgcGFyYW1zKSA9PiB7XG4gIHJldHVybiBmZXRjaChgL2Rhc2hib2FyZHMvJHtpZH0vcGFyYW1zLmpzb25gLCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ30sXG4gICAgYm9keTogc3RyaW5naWZ5KHtcbiAgICAgIHBhcmFtczogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgIH0pXG4gIH0pLnRoZW4odG9KU09OKVxufVxuXG5leHBvcnQgY29uc3QgZGFzaGJvYXJkX2Zhdm91cml0ZV91cGRhdGUgPSAoaWQsIGZhdm9yaXRlKT0+IHtcblxuICByZXR1cm4gZmV0Y2goYC9kYXNoYm9hcmRzLyR7aWR9L2Zhdm9yaXRlLmpzb25gLCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ30sXG4gICAgYm9keTogc3RyaW5naWZ5KHtcbiAgICAgIGZhdm9yaXRlXG4gICAgfSlcbiAgfSkudGhlbih0b0pTT04pXG5cbn1cblxuZXhwb3J0IGNvbnN0IG1ldHJpY3MgPSAoKT0+IHtcbiAgcmV0dXJuIGZldGNoKCcvbWV0cmljcy5qc29uJykudGhlbih0b0pTT04pO1xufVxuXG5leHBvcnQgY29uc3QgdGFncyA9ICgpPT4ge1xuICByZXR1cm4gZmV0Y2goJy90YWdzLmpzb24nKS50aGVuKHRvSlNPTik7XG59XG5cbmV4cG9ydCBjb25zdCBldmVudHMgPSAod2luZG93VGltZSA9IDM2MDAwMDApPT4ge1xuICByZXR1cm4gZmV0Y2goYC9hbGFybS9ldmVudFN0cmVhbS9saXN0Lmpzb24/JHtzdHJpbmdpZnkoe1xuICAgIHdpbmRvd1RpbWVcbiAgfSl9YCkudGhlbih0b0pTT04pO1xufVxuXG5leHBvcnQgY29uc3QgYWxhcm1fc3RyYXRlZ2llcyA9IChzdGF0dXMpPT4ge1xuICByZXR1cm4gZmV0Y2goYC9hbGFybS9zdHJhdGVneS9hbGFybVN0cmF0ZWdpZXMuanNvbj8ke3N0cmluZ2lmeSh7XG4gICAgc3RhdHVzXG4gIH0pfWApLnRoZW4odG9KU09OKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFsYXJtX3N0cmF0ZWdpZSA9IChpZCk9PiB7XG4gIHJldHVybiBmZXRjaChgL2FsYXJtL3N0cmF0ZWd5LyR7aWR9L2FsYXJtU3RyYXRlZ3kuanNvbmApLnRoZW4odG9KU09OKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFsYXJtX3N0cmF0ZWdpZV9zdGF0dXMgPSAoaWQsIHdpbmRvd1RpbWUgPSAzNjAwMDAwKT0+IHtcbiAgcmV0dXJuIGZldGNoKGAvYWxhcm0vJHtpZH0vbWVzc2FnZS9saXN0Lmpzb24/d2luZG93VGltZT0zNjAwMDAwYCkudGhlbih0b0pTT04pXG59XG5cbmV4cG9ydCBjb25zdCBhbGFybV9zdHJhdGVnaWVfcmVsYXRlZCA9IChpZCk9PiB7XG4gIHJldHVybiBmZXRjaChgL2FsYXJtL3N0cmF0ZWd5LyR7aWR9L3JlbGF0ZWRBbGFybVN0cmF0ZWdpZXMuanNvbmApLnRoZW4odG9KU09OKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFsYXJtX3N0cmF0ZWdpZXNfZW5hYmxlID0gKGlkcyk9PiB7XG4gIHJldHVybiBmZXRjaChgL2FsYXJtL3N0cmF0ZWd5L2Rpc2FibGUuanNvbmAsIHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnfSxcbiAgICBib2R5OiBzdHJpbmdpZnkoe1xuICAgICAgc3RyYXRlZ3lJZHM6IGlkcy50b1N0cmluZygpLFxuICAgICAgZGlzYWJsZTogZmFsc2VcbiAgICB9KVxuICB9KS50aGVuKHRvSlNPTilcbn1cblxuZXhwb3J0IGNvbnN0IGFsYXJtX3N0cmF0ZWdpZXNfZGlzYWJsZSA9IChpZHMpPT4ge1xuICByZXR1cm4gZmV0Y2goYC9hbGFybS9zdHJhdGVneS9kaXNhYmxlLmpzb25gLCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ30sXG4gICAgYm9keTogc3RyaW5naWZ5KHtcbiAgICAgIHN0cmF0ZWd5SWRzOiBpZHMudG9TdHJpbmcoKSxcbiAgICAgIGRpc2FibGU6IHRydWVcbiAgICB9KVxuICB9KS50aGVuKHRvSlNPTilcbn1cblxuZXhwb3J0IGNvbnN0IGVtYWlscyA9IChzdGF0dXMpPT4ge1xuICByZXR1cm4gZmV0Y2goYC9tYWlsdG9zLmpzb25gKS50aGVuKHRvSlNPTik7XG59XG5cbmV4cG9ydCBjb25zdCB3ZWJob29rcyA9IChzdGF0dXMpPT4ge1xuICByZXR1cm4gZmV0Y2goYC93ZWJob29rL2xpc3QuanNvbmApLnRoZW4odG9KU09OKTtcbn0iXX0=