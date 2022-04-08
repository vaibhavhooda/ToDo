/*
  Integration test which validates client is injected properly.
*/

import { myContainer } from "./inversify.config";
import { TYPES } from "./types";
import { IManager } from "./interfaces";

const apimanager = myContainer.get<IManager>(TYPES.IManager);


describe('Integration tesing', () => {
    test('test', () => {
      expect(apimanager.test()).toEqual("testing");
    })
  })