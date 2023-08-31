export default class Monster {
  constructor() {
    this.alive = true;
    this.hp = 100;
    this.pAttackPower = 10;
    this.defense = 5;
  }

  updateHp(dmgTaken) {
    this.hp = this.hp - dmgTaken;
    if (this.hp < 0) {
      this.hp = 0;
    }
  }

  updateAliveStatus() {
    if (this.hp <= 0) {
      this.alive = false;
    } else {
      this.alive = true;
    }
  }
}
