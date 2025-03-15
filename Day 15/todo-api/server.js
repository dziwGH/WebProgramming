const express = require("express");
const app = express();

app.use(express.json()); // Middleware to pars json requests

// middlware log requests
app.use((req, res, next) => {
console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
next(); // passes control between middleware
});

//starting server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

let todos = [
    {id: 1, tast:"Learn Express", completed:false},
    {id: 2, task:"Build a REST API", completed:false},
];

// get all the todos
app.get("/todos/test", (req, res) => {
    res.json(todos);
});

//get single todo by id
app.get("/todos/:id", (req,res) => {
    const todo = todos.find((t)=> t.id ===parseInt(req.params.id));
    todo? res.json(todo) : res.status(404).json({message: "todo not found"});
});

//post
app.post("/todos/new", (req, res)=> {
    const newTodo = {id:todos.length, task: req.body.task, completed:false};
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// delete a todo llist
app.delete("/todos/:id", (req,res) => {
    todos = todos.filter((t) => t.id !== parseInt(req.params.id));
    res.json({message : "Todo deleted"});
});

// error handling
app.use((err,req,res,next) =>{
    console.error(err.stack);
    res.status(500).json({message: "Something went wrong"});
})

// put update a todo
app.put("/todos/:id", (req,res)=> {
    const todo = todos.find((t) => t.id === parseInt(req.params.id));
    if(todo){
        todo.task = req.body.task || todo.task;
        todo.completed = req.body.completed !== undefined? req.body.completed:todo.completed;
        res.json(todo);
    } else {
        res.status(404).json({message: "todo not found"});
    }
});