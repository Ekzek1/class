import Zombie from '../Zombie';

test('Zombie class', () => {
  const result = {
    name: 'misha', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };
  const answere = new Zombie('misha');
  expect(result).toEqual(answere);
});
