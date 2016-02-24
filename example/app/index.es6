/**
 * Created by yan on 16-2-22.
 */
import * as API from '../../lib/index.es6';
window.API = API;

var buttons = document.querySelectorAll('button')
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    var promise = eval(this.innerText);
    promise.then(
      res => {
        this.classList.add('ok')
      },
      error=> {
        this.classList.add('error');
      }
    );
  }
}