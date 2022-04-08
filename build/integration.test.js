"use strict";
/*
  Integration test which validates client is injected properly.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_config_1 = require("./inversify.config");
const types_1 = require("./types");
const apimanager = inversify_config_1.myContainer.get(types_1.TYPES.IManager);
describe('Integration tesing', () => {
    test('test', () => {
        expect(apimanager.test()).toEqual("testing");
    });
});
