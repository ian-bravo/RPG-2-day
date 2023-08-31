import Character from "./../src/js/character.js";

describe("Character", () => {
  // Character constructor
  test("should correctly generate a character with the following attributes: str, dex, int, hp, critChance", () => {
    const character = new Character(10, 6, 4);
    console.log(character);
    expect(character.str).toEqual(10);
    expect(character.dex).toEqual(6);
    expect(character.int).toEqual(4);
    expect(character.class).toEqual(null);
    expect(character.alive).toEqual(true);
    expect(character.hp).toEqual(null);
    expect(character.critChance).toEqual(null);
  });

  // classDeterminer method
  test("classDeterminer method should use attributes to determine character class -- str being highest value -- resulting in warrior", () => {
    const character = new Character(10, 6, 4);
    character.classDeterminer();
    expect(character.class).toEqual("warrior");
  });

  test("classDeterminer method should use attributes to determine character class -- dex being highest value -- resulting in rogue", () => {
    const character = new Character(6, 10, 4);
    character.classDeterminer();
    expect(character.class).toEqual("rogue");
  });

  test("classDeterminer method should use attributes to determine character class -- int being highest value -- resulting in wizard", () => {
    const character = new Character(4, 6, 10);
    character.classDeterminer();
    expect(character.class).toEqual("wizard");
  });

  test("classDeterminer method should use attributes to determine character class -- str and dex are equal -- resulting in duelist", () => {
    const character = new Character(7, 7, 6);
    character.classDeterminer();
    expect(character.class).toEqual("duelist");
  });

  test("classDeterminer method should use attributes to determine character class -- str and int are equal -- resulting in templar", () => {
    const character = new Character(7, 6, 7);
    character.classDeterminer();
    expect(character.class).toEqual("templar");
  });

  test("classDeterminer method should use attributes to determine character class -- dex and int are equal -- resulting in shadow", () => {
    const character = new Character(6, 7, 7);
    character.classDeterminer();
    expect(character.class).toEqual("shadow");
  });

  test("classDeterminer method should use attributes to determine character class -- if properties do not match any of the above cases, set this.class to null", () => {
    const character = new Character(0, 0, 0);
    character.classDeterminer();
    expect(character.class).toEqual(null);
  });

  // hpDeterminer method
  test("hpDeterminer method should use the str attribute to determine a characters hp", () => {
    const character = new Character(6, 4, 10);
    character.hpDeterminer();
    expect(character.hp).toEqual(12);
  });

  // critDeterminer method
  test("critDeterminer method should use the dex attribute to determine a characters crit chance", () => {
    const character = new Character(6, 4, 10);
    character.critDeterminer();
    expect(character.critChance).toEqual(4);
  });
});
