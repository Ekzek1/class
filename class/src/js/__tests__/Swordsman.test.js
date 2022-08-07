import Swordsman from '../Swordsman';

test('Swordsman class', () => {
  const result = {
    name: 'misha', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  const answere = new Swordsman('misha');
  expect(result).toEqual(answere);
});
