const express = require('express');

const app = express();
app.use(express.static('client'));
app.listen(8080);