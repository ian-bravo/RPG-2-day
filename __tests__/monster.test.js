import Monster from "./../src/js/monster.js";

describe("Monster", () => {
  test("should generate a Monster with the following attributes: alive, hp, defense", () => {
    const monster = new Monster();
    expect(monster.alive).toEqual(true);
    expect(monster.hp).toEqual(100);
    expect(monster.pAttackPower).toEqual(10);
    expect(monster.defense).toEqual(5);
  });

  test("should apply the damage taken to the targets hp", () => {
    const monster = new Monster();
    let inflictedDmg = 5;
    monster.updateHp(inflictedDmg);
    expect(monster.hp).toEqual(95);
  });
});
