export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(сharacter) {
    if (this.members.has(сharacter)) {
      throw new Error('Such a character is already available in this team');
    }
    this.members.add(сharacter);
  }

  addAll(сharacter) {
    сharacter.forEach((element) => {
      this.members.add(element);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
