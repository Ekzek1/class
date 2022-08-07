// eslint-disable-next-line max-classes-per-file
export default class Character {
  constructor(name, type) {
    this.health = 100;
    this.level = 1;

    this.defaultLength(name);
    this.defaultType(type);
  }

  // eslint-disable-next-line class-methods-use-this
  defaultLength(name) {
    if (name.length <= 2 || name.length >= 10) {
      throw new Error('The allowed length of the name is from 2 to 10');
    } else {
      this.name = name;
    }
  }

  defaultType(type) {
    switch (type) {
      case 'Undead':
      case 'Bowman':
        this.type = type;
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Zombie':
      case 'Swordsman':
        this.type = type;
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Daemon':
      case 'Magician':
        this.type = type;
        this.attack = 10;
        this.defence = 40;
        break;
      default: throw new Error('enter the correct character type');
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('You dead');
    }
    // eslint-disable-next-line no-plusplus
    this.level++;
    // eslint-disable-next-line no-mixed-operators
    this.attack = (20 * this.attack / 100) + this.attack;
    // eslint-disable-next-line no-mixed-operators
    this.defence = (20 * this.defence / 100) + this.defence;
    this.health = 100;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('You dead');
    }
  }
}
