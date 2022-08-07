import Daemon from '../Daemon';

test('Daemon class', () => {
  const result = {
    name: 'misha', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  const answere = new Daemon('misha');
  expect(result).toEqual(answere);
});
