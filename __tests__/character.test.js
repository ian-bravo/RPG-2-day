import Character from './../src/js/character.js';

describe ('Character', () => {

  test('should correctly generate a character with the following attributes: str, dex, int', () => {
    const character = new Character(10,6,4);
    expect(character.str).toEqual(10);
    expect(character.dex).toEqual(6);
    expect(character.int).toEqual(4);
  });
  
  test('classDeterminer method should use attributes to determine character class -- str being highest value -- resulting in warrior', () => {
    const character = new Character(10, 6, 4);
    character.classDeterminer();
    expect(character.class).toEqual("warrior");
  });
});


