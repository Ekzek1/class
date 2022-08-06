// eslint-disable-next-line max-classes-per-file
export default class Character {
  constructor(name, type, _health, _level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;

    this.defaultLength(name);
    this.defaultType(type);
    // try{
    //   if(this.name.length  > 2 || this.name.length  < 10){
    //       this.name = name;
    //   }
    // }catch(e){
    //   throw new Error('The allowed length of the name is from 2 to 10')
    // }
    // не знаю как лучше обработать ошибку в конструкторе или отдельной функции
  }

  // eslint-disable-next-line class-methods-use-this
  defaultLength(name) {
    if (name.length <= 2 || name.length >= 10) {
      throw new Error('The allowed length of the name is from 2 to 10');
    }
  }

  defaultType(type) {
    switch (type) {
      case 'Undead':
      case 'Bowman':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Zombie':
      case 'Swordsman':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Daemon':
      case 'Magician':
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
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}


export class Undead extends Character {
  constructor(name, health, level, attack, defence) {
    const type = 'Undead';
    super(name, type, health, level, attack, defence);
  }
}

export class Bowman extends Character {
  constructor(name, health, level, attack, defence) {
    const type = 'Bowman';
    super(name, type, health, level, attack, defence);
  }
}
export class Zombie extends Character {
  constructor(name, health, level, attack, defence) {
    const type = 'Zombie';
    super(name, type, health, level, attack, defence);
  }
}
export class Swordsman extends Character {
  constructor(name, health, level, attack, defence) {
    const type = 'Swordsman';
    super(name, type, health, level, attack, defence);
  }
}
export class Daemon extends Character {
  constructor(name, health, level, attack, defence) {
    const type = 'Daemon';
    super(name, type, health, level, attack, defence);
  }
}
export class Magician extends Character {
  constructor(name, health, level, attack, defence) {
    const type = 'Magician';
    super(name, type, health, level, attack, defence);
  }
}
