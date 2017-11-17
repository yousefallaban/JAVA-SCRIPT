//  Q 3: String and Array challenges

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
//regular expression to replace each occurrence of ',' to ' '
let replaceString = /,/gi;
let myNewString = myString.replace(replaceString, ' ');
console.log(myNewString);