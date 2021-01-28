let bodyParser = require('body-parser');

//Connect this controller to model
let {mongoose, Todo} = require('../models/todo');

let urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {

    app.get('/', function (req, res) {
		res.redirect('/todo');
	});

    app.get('/todo', function (req, res) {
        //get data from mongodb and pass it to view
        Todo.find({}, function(err, data) {
            if (err) throw err;
            res.render('todo', {todos: data});
        });
	});

    app.post('/todo', urlencodedParser, function (req, res) {
        // get data from the view and add it to mongodb
        Todo(req.body).save(function(err, data) {
            if (err) throw err;
            res.json(data);
        })
    });

    app.delete('/todo/:item', function (req, res) {
        //delete the requested item from mongodb
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).deleteOne(function(err, data) {
            if (err) throw err;
            res.json(data);
        });
    });
};
