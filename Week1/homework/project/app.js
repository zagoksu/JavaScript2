'use strict'

const myFavQuotes = [
    {
      quote: 'Those who dare to fail miserably can achieve greatly.',
      author: 'John F. Kennedy',
    },
    {
      quote: 'If you want to live a happy life, tie it to a goal, not to people or things.',
      author: 'Albert Einstein',
    },
    {
      quote:'Have no fear of perfection, you will never reach it.',
      author: 'Salvador Dali',
    },
    {
      quote: 'A man who won\'t read has no advantage over man who can\'t read.',
      author: 'Mark Twain',
    },
    {
      quote:'I know Kung-Fu.',
      author: 'Neo',
    },
    {
      quote:'It\'s not a lie if you believe it.',
      author: 'George Costanza',
    },
  ];
  
  // selecting elements by their id's
  let buttonEl = document.getElementById('btn');
  let quoteEl = document.getElementById('quote');
  let authorEl = document.getElementById('author');
  
  // randomly selecting a quote from and author
  buttonEl.onclick = function getRandomQuote() {
    let randomQuote = myFavQuotes[Math.floor(Math.random() * myFavQuotes.length)];
    quoteEl.textContent = randomQuote.quote;
    authorEl.textContent = " " + randomQuote.author;
  }
  
