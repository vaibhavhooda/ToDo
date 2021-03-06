"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_config_1 = require("./inversify.config");
const types_1 = require("./types");
const apimanager = inversify_config_1.myContainer.get(types_1.TYPES.IManager);
// Fetches the Todo list from URL "https://jsonplaceholder.typicode.com/todos" & display it in console.
console.log(apimanager.fetchData());
