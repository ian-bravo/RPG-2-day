import { createState } from '../src/js/character.js';

describe('createState', () => {
  test('should create a new property with values for a new character', () => {
    const character = {}
    const prop = "str";
    const value = 15;
    expect(createState(prop)(value)(character)).toEqual({"str" : 15});
  })
})