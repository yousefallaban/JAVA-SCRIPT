// Q 1- declaring an array that contains 10 strings
let bookId = ['smarter_way_to_learn_Java_Script',
    'introduction_to_algorithms',
    'head_first_javascript',
    'eloquent_javascript',
    'head_first_mobile_web',
    'javascript_the_good_part',
    'learning_javascript',
    'javascript_testing',
    'object_oriented_javascript',
    'learning_javascript_design_pattern'
];
//  Q 4- object containing information for each book {ID, title, language and author}.
let bookInfo = [
    { title: 'smarter way to learn Java Script', language: 'english', author: 'Mark Myers', id: 'smarter_way_to_learn_Java_Script' },
    { title: 'introduction to algorithms', language: 'english', author: 'tony hoare', id: 'introduction_to_algorithms' },
    { title: 'head first javascript', language: 'english', author: 'Michael Morrison', id: 'head_first_javascript' },
    { title: 'eloquent javascript', language: 'english', author: 'Rebecca M. Riordan', id: 'eloquent_javascript' },
    { title: 'head first mobile web', language: 'english', author: 'Ryan Benedetti, Ronan Cranley', id: 'head_first_mobile_web' },
    { title: 'javascript the good part', language: 'english', author: 'Douglas Crockford', id: 'javascript_the_good_part' },
    { title: 'learning javascript', language: 'english', author: 'Tim Wright', id: 'learning_javascript' },
    { title: 'javascript testing', language: 'english', author: 'Yuxian Eugene Liang', id: 'javascript_testing' },
    { title: 'object oriented javascript', language: 'english', author: 'Stoyan Stefanov', id: 'object_oriented_javascript' },
    { title: 'learning javascript design pattern', language: 'english', author: 'Addy Osmani', id: 'learning_javascript_design_pattern' }
];
// 
let bookImg = {
    smarter_way_to_learn_Java_Script: 'img/smarter_way_to_learn_Java_Script.jpg',
    introduction_to_algorithms: 'img/introduction_to_algorithms.jpg',
    object_oriented_javascript: 'img/object_oriented_javascript.jpg',
    eloquent_javascript: 'img/eloquent_javascript.jpg',
    head_first_mobile_web: 'img/head_first_mobile_web.jpg',
    javascript_the_good_part: 'img/javascript_the_good_part.jpg',
    learning_javascript: 'img/learning_javascript.jpg',
    javascript_testing: 'img/javascript_testing.jpg',
    head_first_javascript: 'img/head_first_javascript.jpg',
    object_oriented_javascript: 'img/object_oriented_javascript.jpg',
    learning_javascript_design_pattern: 'img/learning_javascript_design_pattern.jpg'
};

// Q 3-  generate a ul with li elements for each book ID

// function makeIdFromTitle() {
//     let ul = document.createElement('ul');
//     for (let i = 0; i < bookId.length; i++) {
//         let id = bookId[i];
//         let li = document.createElement('li');
//         li.setAttribute('id', id);
//         ul.appendChild(li);

        
//     }
//     console.log(ul);
//     //document.body.appendChild(ul);
// }
// makeIdFromTitle();

// Q 4...7
function giveMeUl() {
    let ul = document.createElement('ul');
    ul.setAttribute('id', "listOfBook");

    for (let i = 0; i < bookInfo.length; i++) {
        const id = bookInfo[i].id;
        const title = bookInfo[i].title;
        const language = bookInfo[i].language;
        const author = bookInfo[i].author;
        // create HTML element
        const li = document.createElement('li');
        const h1 = document.createElement('h1');
        let img = document.createElement('img');
        const p = document.createElement('p');
        const span = document.createElement('span');
        h1.innerHTML = title;
        p.innerHTML = 'language: ' + language;
        span.innerHTML = "by :" + author;
        // inject the ID insaid  li
        li.setAttribute('id', id);
        li.setAttribute('class', 'bookItem');
        // inject them inside `ul`
        li.appendChild(h1);
        // creat img
        for (let key of Object.keys(bookImg)) {
            let valueOfKeys = bookImg[key];
            //console.log(valueOfKeys);
            //console.log(key);
            if (id == key) {
                img.src = valueOfKeys;
                img.alt = key;
            }
        }
        ul.appendChild(li);
        li.appendChild(img);
        li.appendChild(p);
        li.appendChild(span);
    }
    // Open console
    console.log(ul);
    document.body.appendChild(ul);

}
giveMeUl();