const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()

app.use(cors());
app.use(bodyParser.json());

let todos = []
app.get('/getTodo', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    console.log('test')
    res.json(todos)
})

app.post('/addTodo', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const todo = req.body.todoDetails;
    todos.push(todo);
    res.json("todo added");
})

app.put('/updateTodo/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const newTodo = req.body.todoDetails;
    todos = todos.map((todo) => {
        if (todo.id === req.params.id) {
            return newTodo
        }
        return todo;
    });
    
    res.json(todos)
})

app.listen(process.env.port || 4000, () => {
    console.log('connected')
})
