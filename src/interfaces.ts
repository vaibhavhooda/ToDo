export interface ITodoClient {
    fetchTodoList() : Promise<any>;
    
    /*
        This method is used for integration test which validates client is injected properly
    */
    test() : string;
}

export interface IManager {
    fetchData() : Promise<any>;
    test() : string;
}