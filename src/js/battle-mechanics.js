export function calcDmgToReceive(targetOfAtk, incomingDmg) {
  let damageToHp = incomingDmg - targetOfAtk.defense;

  if (damageToHp <= 0) {
    damageToHp = 0;
  }
  return damageToHp;
}

//new function, outputs incomingDmg
export function isItCritOrNot() {
  let dieRoll = 1 + Math.floor(Math.random() * 100);

  if (dieRoll >= 50) {
    return "crit";
  } else {
    return "not";
  }
}
