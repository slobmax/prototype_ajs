export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
  Character.prototype.damage = (points) => {
    let damages = `${this.health -= points * (1 - this.defence / 100)}`;
    if (this.health < 0) {
      damages = 0;
      this.health = 0;
    }
    return damages;
  };
}
