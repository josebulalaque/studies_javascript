// console.dir(document)

//document.body.children[1].children[0].href = 'https://google.com';

//id selector
let anchorElement = document.getElementById('external-link');
anchorElement.href  = 'https://google.com';

//css-selector
anchorElement = document.querySelector('a'); //selects the first matching element in html
anchorElement.href  = 'https://microsoft.com';


// add an element to HTML using JS
// 1. create the new element

let newAnchorElement = document.createElement('a');

newAnchorElement.href = 'https://google.com'
newAnchorElement.textContent = 'This leads to google!';

// 2. get access to the parent element that should hold the new element

let firstParagraph = document.querySelector('p'); // finds the first <p> element in the page

// 3. insert the new element into the parent element content

firstParagraph.append(newAnchorElement);

//REMOVE ELEMENTS

// 1. SELECT THE ELEMENT that should be removed
let firstH1Element = document.querySelector('h1');

// 2. remove it!
firstH1Element.remove();

firstH1Element.parentElement.removeChild(firstH1Element); // for older browser like IE
