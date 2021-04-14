var fs=require('fs');
var data=fs.readFileSync('courseList.json', 'utf8');
var words=JSON.parse(data);

var i;
var code;
var title;
var term;
var uoc;
var description

for (i = 0; i < words.length; i++) {
    if (words[i].c_code == "INFS1609") {
       code = words[i].c_code;
       title = words[i].c_title;
       term = words[i].c_term;
       uoc = words[i].c_uoc;
       description = words[i].c_description;
    } else {
        continue;
    }
}

console.log('Code:', code);
console.log('Title:', title);
console.log('Term:', term.split(','));
console.log('UOC:', uoc);
console.log('Description:', description);