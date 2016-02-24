/**
 * Created by yan on 16-2-22.
 */
import * as API from '../../lib/index.es6';
window.API = API;

var buttons = document.querySelectorAll('button');
var preElement = document.getElementById('pre');
var countElement = document.getElementById('count');

const isArray = obj=> {
  return "[object Array]" === Object.prototype.toString.call(obj)
}

const getNotCoveredMethodNames = ()=> {
  let apiMethodNames = Object.keys(API);
  let coveredMethodNameCount = {};

  for (var i = 0; i < buttons.length; i++) {
    let command = buttons[i].innerText;
    let matched = command.match(/API\.([^\(\)]+)\(/);

    if (matched) {
      let methodName = matched[1];
      if (coveredMethodNameCount[methodName]) {
        coveredMethodNameCount[methodName]++;
      } else {
        coveredMethodNameCount[methodName] = 1
      }

      if (!API[methodName]) {
        buttons[i].disable = "";
        buttons[i].classList.add('na')
      }
    }
  }
  return apiMethodNames.filter(m=>!coveredMethodNameCount[m]);
}

let notCovered = getNotCoveredMethodNames();

if (notCovered.length) {
  alert(notCovered + '还没有被覆盖到')
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {

    var command = this.innerText;


    var promise = eval(command);


    promise
      .then(res => {
        preElement.innerText = JSON.stringify(res, null, 2);

        if (isArray(res)) {
          countElement.innerText = res.length;
        } else {
          countElement.innerText = Object.prototype.toString.call(res);
        }

        this.classList.add('ok')
      })
      .catch((e)=> {
        alert(e);
        this.classList.add('error')
      });
  }
}