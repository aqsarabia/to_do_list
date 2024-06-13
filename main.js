#! /usr/bin/env node 
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "select an option",
            choices: ["Add", "Update", "View", "Delete", "Exit"],
        }
    ]);
    if (ans.select === "Add") {
        let addTodo = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: "add items in the list",
                validate: function (input) {
                    if (input.trim() == "") {
                        return "please enter a non-empty item.";
                    }
                    return true;
                }
            }
        ]);
        if (addTodo.todo.trim() != "") {
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
        }
    }
    if (ans.select === "Update") {
        let updateTodo = await inquirer.prompt([
            {
                name: "todo",
                type: "list",
                message: "update items in the list",
                choices: todos.map(item => item)
            }
        ]);
        let addTodo = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: "add items in the list"
            }
        ]);
        let newTodo = todos.filter(val => val !== updateTodo.todo);
        todos = [...newTodo, addTodo.todo];
        todos.forEach(todo => console.log(todo));
    }
    if (ans.select === "View") {
        console.log("*******TO-DO-LIST******");
        todos.forEach(todo => console.log(todo));
    }
    if (ans.select === "Delete") {
        let deleteTodo = await inquirer.prompt([
            {
                name: "todo",
                type: "list",
                message: "select item to delete",
                choices: todos.map(item => item)
            }
        ]);
        let newTodo = todos.filter(val => val !== deleteTodo.todo);
        todos = [...newTodo];
        todos.forEach(todo => console.log(todo));
    }
    if (ans.select === "Exit") {
        console.log("exiting program.......");
        condition = false;
    }
}
