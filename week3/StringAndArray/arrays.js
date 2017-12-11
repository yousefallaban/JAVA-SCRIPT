// Q2 

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
// adding new elements.at a specific index.
favoriteAnimals.splice(1, 0, 'meerkats');
console.log("insert 'meerkats' at 1-index position");
console.log(favoriteAnimals);
//the length of the array
console.log('The array has a length of:' + favoriteAnimals.length);
// removing existing element
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
// find a position or the index of the item in the array
const indexOfItem = favoriteAnimals.indexOf('meerkats');
if (indexOfItem === -1) {
    console.log('The item you are looking for is at index: ' + indexOfItem);
} else { 
    console.log("The item you are looking for it's not exist");
}




