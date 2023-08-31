export default class Character {
  constructor(setStr, setDex, setInt) {
    this.str = setStr;
    this.dex = setDex;
    this.int = setInt;
  }

  classDeterminer() {
    if (this.str > 0 && this.dex > 0 && this.int > 0) {
      if (this.str > this.dex && this.str > this.int) {
        this.class = "warrior";
      } else if (this.dex > this.str && this.dex > this.int) {
        this.class = "rogue";
      } else if (this.int > this.str && this.int > this.dex) {
        this.class = "wizard";
      } else if (this.str === this.dex) {
        this.class = "duelist";
      } else if (this.str === this.int) {
        this.class = "templar";
      }
      //else if (this.dex === this.int)
      else {
        this.class = "shadow";
      }
    } else {
      this.class = null;
    }
  }

  hpDeterminer() {
    this.hp = this.str * 2;
  }

  critDeterminer() {
    this.critChance = this.dex;
  }
}
