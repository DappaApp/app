const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://developer:myrjim-jyfpeG-7kevgy@clusterdappa-nbxz2.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.use(require('./routes'));

app.listen(3333);