// const calcAre() = function(radius){
//     return 3.14 * radius**2;
// }


// const calcAre = radius => {
//     return 3.14*radius**2;
// }


// const para = document.querySelector('body > h1');
// console.log(para);

// const paras = document.querySelectorAll('p')
// console.log(paras)

// paras.forEach( para=> {
//     console.log(para)
// })

// console.log(paras[1])

// const errors = document.querySelectorAll('.error');
// console.log(errors)

// const para = document.querySelector('p');
// para.innerHTML += '<h2> This is my favourite Home.</h2>'


// const content = document.querySelector('.content')

// const people = ['Apple', 'Mango', 'Callback'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

// const link = document.querySelector('a');

// link.setAttribute('href', 'https://www.bbc.co.uk');
// link.innerHTML = 'BBC World';

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color: green;')

// const title = document.querySelector('h1')
// //title.setAttribute('style', 'margin: 50px;');

// console.log(title.style);
// title.style.color = 'crimson';
// title.style.fontSize = '50px'

// //Removing the style

// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('success');
// content.classList.remove('success');
// content.classList.remove('error');

// const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//     if(p.textContent.includes('error')){
//         p.classList.add('error');
//     }
//     if(p.textContent.includes('success')){
//         p.classList.add('success');
//     }
// })

// //Togle method
// const title = document.querySelectorAll('h1');

// title.forEach(p => {
//     if(p.textContent.includes('DOM')){
//         p.classList.add('title');
//     }
// })

const article = document.querySelector('article');

console.log(article.children);
console.log(Array.from(article.children));
console.log(article.children);

Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
});

const title = document.querySelector('h2');

console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

console.log(title.nextElementSibling.parentElement.children);
