const ul = document.getElementById("js-lists");
const fragment = document.createDocumentFragment();

const contents =   [
    { to: "bookmark.html", img: "1.png", alt: "画像1", text: "ブックマーク" },
    { to: "message.html", img: "2.png", alt: "画像2", text: "メッセージ" },
];

contents.forEach ((content)=> {
  const image = document.createElement('img');
  const anchor = document.createElement('a');
  const li = document.createElement('li');

  image.src = content.img;
  image.alt = content.alt;
  anchor.href = "/" + content.to;

  fragment.appendChild(li)
          .appendChild(anchor)
          .appendChild(image)
          .insertAdjacentText('afterend',content.text);
})

ul.appendChild(fragment);
