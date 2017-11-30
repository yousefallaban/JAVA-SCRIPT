// 8- Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.

let fullName = 'Yousef Allaban';
console.log(' My Name is: ' + fullName);
let myAge = 28;
console.log(' My Age is: ' + myAge);
let socialStatus= true;
console.log(' My social Status is: ' + socialStatus);
let myCity ='Eindhoven';
console.log(' My city is: ' + myCity);
let numOfChildren = null;
console.log(' The number of My children is: ' + numOfChildren);
//log the actual type of my variables by using typeof
console.log('The value of my variable fullName is: ' + typeof fullName);
console.log('The value of my variable myAge is: ' + typeof myAge);
console.log('The value of my variable socialStatus is: ' + typeof socialStatus);
console.log('The value of my variable myCity is: ' + typeof myCity);
console.log('The value of my variable numOfChildren is: ' + typeof numOfChildren);
//compare the types of different variables 
if (typeof fullName === typeof myCity ){
    console.log('My variables fullName and myCity have SAME TYPE');
}else{
    console.log('My variables fullName and myCity dose not have the SAME TYPE');
    
}
if (typeof fullName === typeof myAge) {
    console.log('My variables fullName and myAge have SAME TYPE');
} else {
    console.log('My variables fullName and myAge dose not have the SAME TYPE');

}


