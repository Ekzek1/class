import Character, {
  Undead, Bowman, Zombie, Swordsman, Daemon, Magician,
} from '../Character';


test('character constructor Zombie', () => {
  const result = {
    name: 'misha',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const answere = new Character('misha', 'Zombie', 1, 1, 1, 1);
  expect(result).toEqual(answere);
});

test('Zombie class', () => {
  const result = {
    name: 'misha',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const answere = new Zombie('misha', 1, 1, 1, 1);
  expect(result).toEqual(answere);
});

test('character constructor Swordsman', () => {
  const result = {
    name: 'misha',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const answere = new Character('misha', 'Swordsman', 1, 1, 1, 1);
  expect(result).toEqual(answere);
});

test('Swordsman class', () => {
  const result = {
    name: 'misha',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const answere = new Swordsman('misha', 1, 1, 1, 1);
  expect(result).toEqual(answere);
});

test('character constructor Undead', () => {
  const result = {
    name: 'misha',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const answere = new Character('misha', 'Undead', 1, 1, 1, 1);
  expect(result).toEqual(answere);
});

test('Undead class', () => {
  const result = {
    name: 'misha',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const answere = new Undead('misha', 1, 1, 1, 1);
  expect(result).toEqual(answere);
});

test('character constructor Bowman', () => {
  const result = {
    name: 'misha',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const answere = new Character('misha', 'Bowman', 1, 1, 1, 1);
  expect(result).toEqual(answere);
});

test('Bowman class', () => {
  const result = {
    name: 'misha',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const answere = new Bowman('misha', 1, 1, 1, 1);
  expect(result).toEqual(answere);
});

test('character constructor Daemon', () => {
  const result = {
    name: 'misha',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const answere = new Character('misha', 'Daemon', 1, 1, 1, 1);
  expect(result).toEqual(answere);
});

test('Daemon class', () => {
  const result = {
    name: 'misha',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const answere = new Daemon('misha', 1, 1, 1, 1);
  expect(result).toEqual(answere);
});

test('character constructor Magician', () => {
  const result = {
    name: 'misha',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const answere = new Character('misha', 'Magician', 1, 1, 1, 1);
  expect(result).toEqual(answere);
});

test('Magician class', () => {
  const result = {
    name: 'misha',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const answere = new Magician('misha', 1, 1, 1, 1);
  expect(result).toEqual(answere);
});

test('character level up', () => {
  const result = {
    name: 'misha',
    type: 'Undead',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  const answere = new Character('misha', 'Undead', 1, 1, 1, 1);
  answere.levelUp();
  expect(result).toEqual(answere);
});

test('character damage', () => {
  const result = {
    name: 'misha',
    type: 'Undead',
    health: 92.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const answere = new Character('misha', 'Undead', 1, 1, 1, 1);
  answere.damage(10);
  expect(result).toEqual(answere);
});

// test('character Error lenght', ()=>{
//   const result = new Character('mf','Magician',1,1,1,1)
//   expect(result).toThrow('The allowed length of the name is from 2 to 10')
// })  как проверить ошибку
