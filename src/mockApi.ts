/*
    Function used for mock API testing
*/

const axios = require("axios");

async function fetchTodoListTitle(): Promise<any> {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return response[0].title;
}

module.exports = fetchTodoListTitle;