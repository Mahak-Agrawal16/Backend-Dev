const express = require("express");
const app = express();
app.use(express.json());
let todos = [];
app.post("/todos", (req, res) => {
    todos.push(req.body);
    res.send("Todo added");
});
app.get("/todos", (req, res) => {
    res.json(todos);
});
app.put("/todos/:id", (req, res) => {
    const id = req.params.id;
    todos[id] = req.body;
    res.send("Todo updated");
});
app.delete("/todos/:id", (req, res) => {
    todos.splice(req.params.id, 1);
    res.send("Todo deleted");
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
