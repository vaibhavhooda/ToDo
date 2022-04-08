import { myContainer } from "./inversify.config";
import { TYPES } from "./types";
import { IManager } from "./interfaces";
const apimanager = myContainer.get<IManager>(TYPES.IManager);


// Fetches the Todo list from URL "https://jsonplaceholder.typicode.com/todos" & display it in console.
console.log(apimanager.fetchData());