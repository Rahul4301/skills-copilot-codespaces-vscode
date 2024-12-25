// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for the homepage
app.get('/', (req, res) => {
  res.send('Welcome to my homepage!');
});

// Create a route for the about page
app.get('/about', (req, res) => {
  res.send('Welcome to my about page!');
});

// Create a route for the contact page
app.get('/contact', (req, res) => {
  res.send('Welcome to my contact page!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});