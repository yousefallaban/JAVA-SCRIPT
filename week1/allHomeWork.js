//1-Write a console.log statement saying "Hello World!" for each language that you know.

var pets = [];
console.log('the value of my Array will content: pets ');
console.log(pets);
var animals = ['cat', 'dog','horse'];
console.log(animals);
animals.push('baby pig');
console.log(animals);

//2- console.log('I'm awesome');
//2.1 Copy the code in your.js file and run it.You will see that you will get a SyntaxError
console.log('I\'m awesome');

//3- Declare a variable x and initialize it with an integer.
//3.1 First, declare your variable x. 
//3.2 Add a console.log statement that explains that explains in words what you think the value of x is, like in this example:
//console.log('the value of my variable x will be: whateverYouThinkItWillLog');
//3.3 Add a console.log statement that logs the value of x 
//3.4 Now initialize your variable x with an integer 
//3.5 Now add a console.log statement that explains what you think the value of x is. 
//3.6 Add a console.log statement that logs the value of x.Steps to be taken:


let x; // Declaration
console.log('the value of my variable x will be: 10');
console.log(x); //log the actual value of x
x = 10;
console.log('the value of my variable x will be: ', x);
console.log(x);

//Declare a variable y and assign a string to it.

var y = 'study portals';
console.log('the value of my string will be:');
console.log(y);
y = 'our world';
console.log('the value of my string will be:');
console.log(y);



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


//6- Arrays!
//6.1 Declare an empty array (you can decide on how to call it yourself, but read on a bit here and see if you can find a good name that exactly describes what this variable will hold). 
//6.2 Write a console.log statement that explains in words what you think the value of the array is. 
//6.3 Console.log your array. 
//6.4 Create an array that has your favorite animals inside 
//6.5 Log your array 
//6.6 Add a statement that adds favorite animal (baby pig) to the existing array 
//6.7 Log your new array!


var pets = [];
console.log('the value of my Array will content: pets ');
console.log(pets);
var animals = ['cat', 'dog','horse'];
console.log(animals);
animals.push('baby pig');
console.log(animals);



//7-More strings 
//7.1 Let's consider the following string: let myString = "this,is,a,test". 
//7.2 Add the string to your file and console.log it. 
//7.3 Find a way to get the length of myString. 
//7.4 Console.log the length of myString.

let myString = 'this,is,a,test';
console.log('This is the my string :',myString);
console.log('The the length of my String is :',myString.length);




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


//9-If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
//9.1 Add at least 3 console.log statements in which you show that you understand what % does.
console.log('7 % 3 = 1 Because');
console.log('7 / 3 = 2 and Remainder 1 ');
console.log('2 * 3 = 6 ');
console.log('7 - 6 = 1 ');



//Write a program to answer the following questions:
//10.1 Can you store multiple types in an array? Numbers and strings?
//10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this? 
//10.3 Add console.log statements to the above program's in which you show that you understand the concepts (just like you've done in the above assignments).

console.log('Yes we can store different types of elements within an array, including strings and numbers');
console.log('let films = ["Titanic", 7];');

if (6 / 0 === 10 / 0) {

    console.log("True");
}
else {
    console.log("False");
}


