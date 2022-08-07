import Undead from '../Undead';

test('Undead class', () => {
  const result = {
    name: 'misha', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };
  const answere = new Undead('misha');
  expect(result).toEqual(answere);
});
