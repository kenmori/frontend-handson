//get:ID='js-lists'
const ul = document.getElementById('js-lists');
//create <li>
const li = document.createElement('li');

//create <img>
const image = document.createElement('img');
//add src attribute
image.src = 'bookmark.png';
//add alt attribute
image.alt = 'ブックマーク';

//create <a>
const link = document.createElement('a');
//add href attribute
link.href = '1.html';

//add img to <a>
link.appendChild(image);

//create text 
const text = 'これです';
//Add text after the last child element within the <a> element
link.insertAdjacentHTML("beforeend",text);

//add link to li
li.appendChild(link);

//add li to ul
ul.appendChild(li);
