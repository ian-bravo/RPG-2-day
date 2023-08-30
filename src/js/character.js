export default class Character {
  constructor (setStr, setDex, setInt) {
    this.str = setStr;
    this.dex = setDex;
    this.int = setInt;
  }

  classDeterminer() {
    if ((this.str > this.dex) && (this.str > this.int)) {
      this.class = "warrior";
    }
    if ((this.dex > this.str) && (this.dex > this.int)) {
      this.class = "rogue";
    }
  }
}