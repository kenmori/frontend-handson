
const ul = document.getElementById('js-lists');
const fragment = document.createDocumentFragment();

const contents = [
  { href: 'a1.html', src: '/img/bookmark.png', text: 'a1' },
  { href: 'a2.html', src: '/img/message.png', text: 'a2' }
];

for(let i = 0; i < contents.length; i++){
  const image = document.createElement('img');
  const anchor = document.createElement('a');
  const li = document.createElement('li');

  const content = contents[i];

  image.src = content.src;
  anchor.href = content.href;

  li
  .appendChild(anchor)
  .appendChild(image);

  anchor.insertAdjacentHTML('beforeend',content.text);

  fragment.appendChild(li);
}

ul.appendChild(fragment);
