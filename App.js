const a = document.querySelector('div').children[3];
a.textContent='DOM method description';

const b=document.querySelectorAll('[href^="site.ua/ua/"]')
console.log(b);

const list=document.querySelector('ul')
const linull=document.createElement('li')
const liFourth=document.createElement('li')
const liSecond=document.createElement('li')
linull.textContent='0'
list.prepend(linull)
liFourth.textContent='4';
list.appendChild(liFourth);
liSecond.textContent='2';
const firstListItem = document.getElementById('first');
list.insertBefore(liSecond, firstListItem.nextSibling);

<h1>Document Object Model <span>DOM</span></h1>
const link = document.createElement('a');
link.setAttribute('id', 'link');
link.setAttribute('href', 'https://dom.spec.whatwg.org/');
link.appendChild(h1);
const container = document.querySelector('body');
container.appendChild(link);