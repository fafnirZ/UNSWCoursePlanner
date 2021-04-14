var fs=require('fs');
var data=fs.readFileSync('courseList.json', 'utf8');
var courses=JSON.parse(data);

const term1 = 'bc067bf7db7993009c2c403c3a961994';
const term2 = '03067bf7db7993009c2c403c3a961997';
const term3 = '601633b7db7993009c2c403c3a9619ab';
const summer = 'b8f53777db7993009c2c403c3a9619e4';

var title;
var code;
var term;
var uoc;
var description

for (var i = 0; i < courses.length; i++) {
    if (courses[i].COMP3511) {
        title = courses[i].COMP3511.c_title;
        code = courses[i].COMP3511.c_code;
        term = String(courses[i].COMP3511.c_term);
        var newTerm = term.replace(term1, "Term 1");
        var newTerm2 = newTerm.replace(term2, "Term 2");
        var newTerm3 = newTerm2.replace(term3, "Term 3");
        var newTerm4 = newTerm3.replace(summer, "Summer Term");
        uoc = courses[i].COMP3511.c_uoc;
        description = courses[i].COMP3511.c_description;
    }
}

console.log('Title:', title);
console.log('Code:', code);
console.log('Term:', newTerm4);
console.log('UOC:', uoc);
console.log('Description:', description);