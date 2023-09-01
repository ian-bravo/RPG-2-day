export function calcDmgToReceive(targetOfAtk, incomingDmg) {
  let damageToHp = incomingDmg - targetOfAtk.defense;

  if (damageToHp <= 0) {
    damageToHp = 0;
  }
  return damageToHp;
}

export function rollDice() {
  return 1 + Math.floor(Math.random() * 100);
}

// export function isItCritOrNot(attacker) {
//   let dieRoll = 1 + Math.floor(Math.random() * 100);

//   if (dieRoll >= attacker.critChance) {
//     return true;
//   } else {
//     return false;
//   }
// }
