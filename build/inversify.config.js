"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myContainer = void 0;
const inversify_1 = require("inversify");
const types_1 = require("./types");
const entities_1 = require("./entities");
const myContainer = new inversify_1.Container();
exports.myContainer = myContainer;
myContainer.bind(types_1.TYPES.ITodoClient).to(entities_1.TodoClient);
myContainer.bind(types_1.TYPES.IManager).to(entities_1.ApiManager);