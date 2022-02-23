const quotes = [
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: 'Albert Einstein',
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
  },
  {
    quote:
      'Insanity is doing the same thing, over and over again, but expecting different results.',
    author: 'Albert Einstein',
  },
  {
    quote:
      'It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.',
    author: ' Maurice Switzer',
  },
  {
    quote:
      'Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.',
    author: 'Bill Keane',
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: 'Thomas A. Edison',
  },
  {
    quote:
      'I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.',
    author: 'Dr. Seuss',
  },
  {
    quote: 'Everything you can imagine is real',
    author: 'Pablo Picasso',
  },
  {
    quote:
      'Sometimes the questions are complicated and the answers are simple.',
    author: 'Dr. Seuss',
  },
  {
    quote:
      'The reason I talk to myself is because I’m the only one whose answers I accept.',
    author: 'George Carlin',
  },
];
const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
