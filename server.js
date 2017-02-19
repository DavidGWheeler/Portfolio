'use strict';

const express = require('express');


const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.static('./public'));

app.get('*', function(request, response) {
  response.sendFile('index.html', {root: '.'});
});

app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}!`);
});
