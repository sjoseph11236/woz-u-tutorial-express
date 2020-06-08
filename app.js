//Initialize an express app 
// Creates an Express application. The express() function is a top-level function exported by the express module.
const express = require("express")
const app = express();

const morgan = require('morgan');

const PORT = 8081; 

const movies = require("./movies");
const users = require("./users");

// Loggin Middleware
app.use(morgan('dev'))

// Example of how middleware flows from middleware to middleware
  // - Highlights a response should never be left haninging
  // - Next is standard for how the app goes through each middleware  

app.use((req, res, next) => {
  console.log('here at line 16');
  next();
});

app.use((req,res, next) => {
  console.log('here at line 17')
  next();
})

// Sub-Routes
// Routing to our movies folder
app.use('/movies', movies);
app.use('/users', users)

//Route to root path
app.get('/', (req, res) => res.send("home"))

// Using the wildcard '*' in our route, we can create a route to catch every request to a route we have not defined elsewhere.
//Link to where I found the soluiton:  https://gist.github.com/zcaceres/2854ef613751563a3b506fabce4501fd
app.get('*', function(req, res, next) {
  let err = new Error('Page Not Found');
  err.statusCode = 404;
  next(err);
});

app.listen(PORT, () => console.log(`Example app listening on PORT: ${PORT}`) )

// Error Handling Middleware
// Must be at the end of the middleware stack
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.send(err.message);
})


