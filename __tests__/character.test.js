import Character from './../src/js/character.js';

describe ('Character', () => {

  test('should correctly generate a character with the following attributes: str, dex, int', () => {
    const character = new Character(10,6,4);
    expect(character.str).toEqual(10);
    expect(character.dex).toEqual(6);
    expect(character.int).toEqual(4);
  });
  
});


