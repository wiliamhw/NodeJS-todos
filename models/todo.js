let mongoose = require('../database.js');

//Create a schema
let todoSchema = new mongoose.Schema ({
    item: String
});

let Todo = mongoose.model('Todo', todoSchema);

module.exports = {mongoose, Todo};