export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(Character) {
    if (this.members.has(Character)) {
      throw new Error('Such a character is already available in this team');
    }
    this.members.add(Character);
  }

  addAll(Characters) {
    Characters.forEach((element) => {
      this.members.add(element);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
