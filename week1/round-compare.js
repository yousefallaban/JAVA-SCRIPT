//5-How do you round the number 7.25, to the nearest integer?

var z = 7.25;
console.log('The Main Value is : ',z);
var a = Math.round(7.25);
console.log('The Nearest Value Is : ',a);
var c;
if (z > a){
    
    c = z;
}
else{
    c = a;
}

console.log('the highest values is : ', c);