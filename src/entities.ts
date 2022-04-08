import { injectable, inject } from "inversify";
import "reflect-metadata";
import { ITodoClient, IManager} from "./interfaces";
import { TYPES } from "./types";
const axios = require("axios");

@injectable()
class TodoClient implements ITodoClient {
    public async fetchTodoList(): Promise<any> {

        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        console.log(response);
        return response;
    }

    public test(): string
    {
        return "testing";
    }
}

@injectable()
class ApiManager implements IManager{

    private _todoClient: ITodoClient;

    public constructor(
        @inject(TYPES.ITodoClient) todoClient: ITodoClient
        ){
            this._todoClient = todoClient;
        }

    public fetchData() { return this._todoClient.fetchTodoList(); }
    public test() : string { return this._todoClient.test(); }
}

export { ApiManager, TodoClient};