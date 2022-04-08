import { Container } from "inversify";
import { TYPES } from "./types";
import { ITodoClient, IManager } from "./interfaces";
import { ApiManager, TodoClient} from "./entities";

const myContainer = new Container();
myContainer.bind<ITodoClient>(TYPES.ITodoClient).to(TodoClient);
myContainer.bind<IManager>(TYPES.IManager).to(ApiManager);

export { myContainer };