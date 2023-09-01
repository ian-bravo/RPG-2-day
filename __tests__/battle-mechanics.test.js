import { calcDmgToReceive, rollDice, isItCritOrNot } from "../src/js/battle-mechanics";
import Monster from "../src/js/monster";
import Character from "../src/js/character";

describe("calcDmgToReceive", () => {
  test("should take two parameters, the target of attack - class monster or character, and incomingDamage, then takes into consideration this.defense and returns damage taken", () => {
    const monster = new Monster();
    let damageDealt = 10;
    let damageTaken = calcDmgToReceive(monster, damageDealt);
    expect(damageTaken).toEqual(5);
  });

  test("should take two parameters, the target of attack - class monster or character, and incomingDamage, then takes into consideration this.defense and returns damage taken", () => {
    const monster = new Monster();
    let damageDealt = 4;
    let damageTaken = calcDmgToReceive(monster, damageDealt);
    expect(damageTaken).toEqual(0);
  });
});

describe("testBattle", () => {
  test("should instantiate a character and a monster. Monster should take damage, reducing hp.", () => {
    const character = new Character(10, 6, 4);
    const monster = new Monster();

    character.pAttackPowerDeterminer();
    let inflictedDmg = character.pAttackPower;

    let dmgTaken = calcDmgToReceive(monster, inflictedDmg);
    monster.updateHp(dmgTaken);
    console.log(`Monster hp is: ${monster.hp}`);
    expect(monster.hp).toEqual(95);

    let dmgTaken2 = calcDmgToReceive(monster, inflictedDmg);
    monster.updateHp(dmgTaken2);
    console.log(`Monster hp is: ${monster.hp}`);
    expect(monster.hp).toEqual(90);

    let dmgTaken3 = calcDmgToReceive(monster, 1000);
    monster.updateHp(dmgTaken3);
    monster.updateAliveStatus();
    console.log(`Monster hp is: ${monster.hp}`);
    expect(monster.hp).toEqual(0);
    console.log(`Monster alive status: ${monster.alive}`);
  });

  describe("rollDice", () => {
    test("should return a number between 1 and 100", () => {
      let result = rollDice();
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThan(101);
    });
  });

  describe("isItCritOrNot", () => {
    test("should return true if it's within the character's crit chane, and false if it is not", () => {
      const character = new Character(10, 6, 4);
      let result = isItCritOrNot(character);
      expect(result).toEqual(false);
    });
  });
});

// const mockMath = Object.create(global.Math);
// mockMath.random = () => 7;
// global.Math = mockMath;
