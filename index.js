const express = require('express'),
  morgan = require('morgan');

const app = express();

const topMovies = [
  {
    title: 'The Blindside'
  },
  {
    title: 'The Proposal'
  },
  {
    title: 'How to Lose a Guy in Ten Days'
  },
  {
    title: 'The Fugitive'
  },
  {
    title: 'The Sound of Music'
  },
  {
    title: 'You\'ve Got Mail'
  },
  {
    title: 'Sleepless in Seattle'
  },
  {
    title: 'While You Were Sleeping'
  },
  {
    title: 'Harriet'
  },
  {
    title: 'Hidden Figures'
  },
];

app.use(express.static('public'))
app.use(morgan('common'));


app.get('/', (req, res) => {
  res.send('Welcome to my movie app!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

const bodyParser = require('body-parser'),
  methodOverride = require('method-override');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});