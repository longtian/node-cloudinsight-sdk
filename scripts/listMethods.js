/**
 * Created by yan on 16-2-24.
 */
var API = require('../');
var methods = Object.keys(API).sort();
var version = require('../package').version;

console.log(`**${version}**`);
methods.map(m=> {
  console.log(`- ${m}`);
})