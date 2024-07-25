//get:ID='js-lists'
const ul = document.getElementById('js-lists');

//create <li></li>
const li = document.createElement('li');

//add:text -> これです
li.textContent = 'これです';

ul.appendChild(li);
