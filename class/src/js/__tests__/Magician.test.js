import Magician from '../Magician';

test('Magician class', () => {
  const result = {
    name: 'misha', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  };
  const answere = new Magician('misha');
  expect(result).toEqual(answere);
});
