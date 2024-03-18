// const button = document.querySelector('button');

// button.addEventListener('click', ()=>{
//     console.log('Clicked')
// })

const ul = document.querySelector('ul')

const button = document.querySelector('button');

button.addEventListener('click', () => {
    // ul.innerHTML += '<li>Something new</li>';
    const li = document.createElement('li');
    li.textContent = 'Some new to do.';
    //ul.prepend(li);
    ul.append(li);
});

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', e => {
//         //e.target.style.textDecoration = 'line-through';
//         e.stopPropagation();
//         e.target.remove();
//     });
// });

ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});
