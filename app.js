// console.dir(document)

//document.body.children[1].children[0].href = 'https://google.com';

//id selector
let anchorElement = document.getElementById('external-link');
anchorElement.href  = 'https://google.com';

//css-selector
anchorElement = document.querySelector('a'); //selects the first matching element in html
anchorElement.href  = 'https://microsoft.com';


