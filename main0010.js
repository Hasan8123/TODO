import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What Do You Want To Add In Your Tool?"
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do You Want To Add More Tool?"
        },
    ]);
    const { TODO, addMore } = answer;
    loop = addMore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly Add Valid Input");
    }
}
if (todos.length > 0) {
    console.log("Your Todo List Is Here:");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No Todos Found");
}
