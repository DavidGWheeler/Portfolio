'use strict';

const express = require('express');

const PORT = process.env.PORT || 4000;

const app = express();

app.get('*', function(request, response) {
  response.sendFile('index.html', {root: '.'});
  console.log('server running on port 4000');
});
