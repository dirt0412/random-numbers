const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const express = require('express');
const path = require('path');
const app = express();

server.use(middlewares);

const numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10
];

let countNumbers = [
  {
    id: 1,
    count: 0
  },
  {
    id: 2,
    count: 0
  },
  {
    id: 3,
    count: 0
  },
  {
    id: 4,
    count: 0
  },
  {
    id: 5,
    count: 0
  },
  {
    id: 6,
    count: 0
  },
  {
    id: 7,
    count: 0
  },
  {
    id: 8,
    count: 0
  },
  {
    id: 9,
    count: 0
  },
  {
    id: 10,
    count: 0
  }
];


server.get('/numbers', (req, res) => {
  countNumbers.sort(compare);

  res.send({
    // 'data': numbers
    'data': countNumbers
  });
});

server.get('/random-numbers', (req, res) => {

  let arr = new Array(5).fill(0).map(() => numbers[Math.floor(Math.random() * numbers.length)])

  arr.forEach(a => {
    countNumbers.forEach(n => {
      if ((n.id == a))
        n.count++;
    })
  });

  res.send({
    'data': arr
  });
});

server.listen(3000, () => {
  console.log('JSON Server is running')
});


//-----------
app.use('/public', express.static(path.join(__dirname, './../front')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './../front/index.html'));
});
app.listen(4300, () => console.log("Server listening on: http://localhost:%s", 4300));

function compare(a, b) {
  if (a.count < b.count)
    return 1;
  if (a.count > b.count)
    return -1;
  return 0;
}


