{
  /*
    Jest unit test for the client that mocks the http call
  */
  const fetchTodoListTitle = require("./mockApi");
  const axios = require("axios");
  jest.mock("axios");

  it("returns title of the first Todo item", async () => {

      const mockedTodoList = [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false
        }
      ];

      axios.get = jest.fn().mockResolvedValue(mockedTodoList);

    const title = await fetchTodoListTitle();
    expect(title).toEqual("delectus aut autem");
  });
}