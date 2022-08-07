import Character from '../Character';

test('character constructor Zombie', () => {
  const result = {
    name: 'misha', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };
  const answere = new Character('misha', 'Zombie');
  expect(result).toEqual(answere);
});

test('character constructor Swordsman', () => {
  const result = {
    name: 'misha', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  const answere = new Character('misha', 'Swordsman');
  expect(result).toEqual(answere);
});


test('character constructor Undead', () => {
  const result = {
    name: 'misha', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };
  const answere = new Character('misha', 'Undead');
  expect(result).toEqual(answere);
});

test('character constructor Daemon', () => {
  const result = {
    name: 'misha', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  const answere = new Character('misha', 'Daemon');
  expect(result).toEqual(answere);
});

test('character constructor Magician', () => {
  const result = {
    name: 'misha', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  };
  const answere = new Character('misha', 'Magician');
  expect(result).toEqual(answere);
});


test('character level up', () => {
  const result = {
    name: 'misha', type: 'Undead', health: 100, level: 2, attack: 30, defence: 30,
  };
  const answere = new Character('misha', 'Undead');
  answere.levelUp();
  expect(result).toEqual(answere);
});

test('test class for levelUp dead Magician', () => {
  const result = new Character('misha', 'Magician');
  result.health = 0;
  expect(() => {
    result.levelUp();
  }).toThrow();
});

test('character damage', () => {
  const result = {
    name: 'misha', type: 'Undead', health: 92.5, level: 1, attack: 25, defence: 25,
  };
  const answere = new Character('misha', 'Undead', 1, 1, 1, 1);
  answere.damage(10);
  expect(result).toEqual(answere);
});

test('test class for damage dead Magician', () => {
  const result = new Character('misha', 'Magician');
  result.health = 0;
  expect(() => {
    result.damage(10);
  }).toThrow('You dead');
});

test('character Error lenght', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Character('mf', 'Magician');
  }).toThrow('The allowed length of the name is from 2 to 10');
});

test('character Error type', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Character('misha');
  }).toThrow('enter the correct character type');
});
