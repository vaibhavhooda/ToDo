"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    /*
      Jest unit test for the client that mocks the http call
    */
    const fetchTodoListTitle = require("./mockApi");
    const axios = require("axios");
    jest.mock("axios");
    it("returns title of the first Todo item", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockedTodoList = [
            {
                userId: 1,
                id: 1,
                title: 'delectus aut autem',
                completed: false
            }
        ];
        axios.get = jest.fn().mockResolvedValue(mockedTodoList);
        const title = yield fetchTodoListTitle();
        expect(title).toEqual("delectus aut autem");
    }));
}
