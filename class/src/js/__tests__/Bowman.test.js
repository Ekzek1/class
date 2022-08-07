import Bowman from '../Bowman';

test('Bowman class', () => {
  const result = {
    name: 'misha', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  };
  const answere = new Bowman('misha');
  expect(result).toEqual(answere);
});
