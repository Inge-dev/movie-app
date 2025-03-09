const express = require('express'),
  morgan = require('morgan');

const app = express();

const users = [
  {
    id: 1,
    name: "Tracy",
    favoriteMovies: []
  },
  {
    id: 2,
    name: "Darren",
    favoriteMovies: []
  }
]

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

//GET
app.get('/movies', (req, res) => {
  res.json(topMovies);
});

//GET
app.get('/movies/:category/:value', (req, res) => {
  const { category, value } = req.params;

  if (category === 'title') {
    res.send(`Successful GET request returning data on the movie titled: ${value}`);
  } else if (category === 'genre') {
    res.send(`Successful GET request returning data on movies in the ${value} genre`);
  } else if (category === 'director') {
    res.send(`Successful GET request returning data on movies directed by ${value}`);
  } else {
    res.status(400).send('Invalid category. Please use "title", "genre", or "director".');
  }
});

//CREATE
app.post('/users', (req, res) => {
  res.send('User registered successfully');
});

//UPDATE
app.put('/users/:id', (req, res) => {
  res.send('User info was successfully updated');
});

//CREATE
app.post('/users/:id/:movieTitle', (req, res) => {
  res.send('Movie successfully added');
});

//DELETE
app.delete('/users/:id/:movieTitle', (req, res) => {
  res.send('Movie successfully removed');
});

//DELETE
app.delete('/users/:id', (req, res) => {
  res.send('User email successfully removed');
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