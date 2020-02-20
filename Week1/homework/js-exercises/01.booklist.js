'use strict'

const books = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      alreadyRead: false
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      alreadyRead: true
    }
  ];

  let covers = ['https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg', 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/6709/9780670920792.jpg', 'https://upload.wikimedia.org/wikipedia/en/8/8f/The_pragmatic_programmer.jpg'];

// creating heading
let headingEl = document.createElement('h1');
headingEl.innerText = "Book List"
document.body.appendChild(headingEl);

// creating ul
let bookList = document.createElement('ul');
document.body.appendChild(bookList); //adding ul to body
bookList.style.display = 'flex';

for (let i = 0; i < books.length; i++){
  // creating paragraph for each book and appending them to the body.
  let para = document.createElement('p');
  para.textContent = `${books[i].title} by ${books[i].author}`;
  document.body.appendChild(para);
  
  // creating list elements and appending paragraphs to them.
  let listItem = document.createElement('li');
  listItem.appendChild(para);
  bookList.appendChild(listItem);
  listItem.style.width = '70%';
  listItem.style.listStyleType = 'none';
  listItem.style.textAlign = "center"
  listItem.style.margin= "10px"
   
  // creating image element for each book
  let imgEl = document.createElement('img');
  listItem.appendChild(imgEl);
  imgEl.setAttribute('src', covers[i]);
  imgEl.style.width = '40%';
  
  // setting background color 
  if (books[i].alreadyRead === true) {
    listItem.style.backgroundColor = 'green';
  } else if (books[i].alreadyRead === false){
    listItem.style.backgroundColor = 'red';
  }
}