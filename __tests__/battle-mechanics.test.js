import calcDmgToReceive from "../src/js/battle-mechanics";
import Monster from "../src/js/monster";

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
