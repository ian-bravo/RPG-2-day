import Monster from "./../src/js/monster.js";

describe("Monster", () => {
  test("should generate a Monster with the following attributes: alive, hp, defense", () => {
    const monster = new Monster();
    expect(monster.alive).toEqual(true);
    expect(monster.hp).toEqual(100);
    expect(monster.pAttackPower).toEqual(10);
    expect(monster.defense).toEqual(5);
  });
});
