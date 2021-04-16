// example of how to access the json course file

var fs=require('fs');
var data=fs.readFileSync('courseList.json', 'utf8');
var courses=JSON.parse(data);

const term1 = 'bc067bf7db7993009c2c403c3a961994';
const term2 = '03067bf7db7993009c2c403c3a961997';
const term3 = '601633b7db7993009c2c403c3a9619ab';
const summer = 'b8f53777db7993009c2c403c3a9619e4';

console.log(courses.COMP1511);

console.log('Title:', courses.COMP1511['c_term']);
console.log('Code:', courses.COMP1511['c_code']);
console.log('Term:', courses.COMP1511['c_term']);
console.log('UOC:', courses.COMP1511['c_uoc']);
console.log('Description:', courses.COMP1511['c_description']);