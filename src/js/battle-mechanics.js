export default function calcDmgToReceive(targetOfAtk, incomingDmg) {
  let damageToHp = incomingDmg - targetOfAtk.defense;

  if (damageToHp <= 0) {
    damageToHp = 0;
  }
  return damageToHp;
}

//new function, outputs incomingDmg
