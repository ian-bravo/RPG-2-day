import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import css directory here
// import constructors here
import Character from "./js/character";
import Monster from "./js/monster";
import calcDmgToReceive from "./js/battle-mechanics";

// Test battle
const character = new Character(10, 6, 4);
const monster = new Monster();

character.pAttackPowerDeterminer();
let inflictedDmg = character.pAttackPower;

let dmgTaken = calcDmgToReceive(monster, inflictedDmg);
monster.updateHp(dmgTaken);
