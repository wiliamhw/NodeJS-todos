let mongoose = require('mongoose');
let config = require('./config');

//Connect to the database
mongoose.connect(`mongodb+srv://test:${ config.DB_PASSWORD }@todo.fd2ks.mongodb.net/${ config.DB_USERNAME }?retryWrites=true&w=majority`
    , {useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;