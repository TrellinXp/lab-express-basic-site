// Require Express
const express = require('express');
 
// Express server handling requests and responses
const app = express();
 
// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));
 
// about route:
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about-page.html'));
 
// about route:
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works-page.html'));

// about route:
app.get('/gallery', (request, response, next) => response.sendFile(__dirname + '/views/gallery-page.html'));
 
// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));