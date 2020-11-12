// Load dependencies
const path = require('path');
const express = require('express');
const ejs = require('ejs');

// require gallery module
const woodbox = require('./woodbox');

require('dotenv').config();

// Create express app
const app = express();

// view engine
app.set('view engine', 'ejs');

// app.use is for using middleware
app.use(express.static(path.join(__dirname, 'public')));

// Parse all requests for url encoded form data.
app.use(express.urlencoded({ extended: true }));

// index / homepage
app.get('/' || '/pages/index.ejs', function(req, res){
  res.render('pages/index', {
    title: "Home - Woodbox", 
    tagline: "Welcome to woodbox",
    current: "home"})
});

// gallery 
app.get('/gallery', function(req, res){
  res.render('pages/gallery', {
    title: "Gallery - Woodbox", 
    tagline: "Make your life nature and beautiful",
    current: "gallery"})
});

// subscribe
app.get('/subscribe', function(req, res){
  res.render('pages/subscribe', {
    title: "Subscribe - Woodbox", 
    tagline: "Sign-up to our newsletter",
    current: "subscribe"})
});

// json get endpoint for gallery
app.get('/api/v0/gallery', function(request, response){
  response.json(woodbox);
});

// Do something with form data
app.post('/users', function(request, response) {
  response.send(`<p>Thanks, ${request.body.name}! We'll send newsletter updates to ${request.body.email}.</p>`);
});

// Add more middleware
app.use(function(request, response) {
  response.status(404);
  response.send('404: File Not Found');
});


// Set port preferrence with default
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});