"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoClient = exports.ApiManager = void 0;
const inversify_1 = require("inversify");
require("reflect-metadata");
const types_1 = require("./types");
const axios = require("axios");
let TodoClient = class TodoClient {
    fetchTodoList() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios.get("https://jsonplaceholder.typicode.com/todos");
            console.log(response);
            return response;
        });
    }
    test() {
        return "testing";
    }
};
TodoClient = __decorate([
    (0, inversify_1.injectable)()
], TodoClient);
exports.TodoClient = TodoClient;
let ApiManager = class ApiManager {
    constructor(todoClient) {
        this._todoClient = todoClient;
    }
    fetchData() { return this._todoClient.fetchTodoList(); }
    test() { return this._todoClient.test(); }
};
ApiManager = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.ITodoClient))
], ApiManager);
exports.ApiManager = ApiManager;
