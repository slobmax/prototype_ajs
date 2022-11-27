import Character from '../app';

test('calc health', () => {
  function calcHealth(points) {
    const bowman = new Character('Bowman', 'Bowman');
    bowman.damage(points);
    return bowman.health;
  }
  expect(calcHealth(40)).toBe(76);
  expect(calcHealth(200)).toBe(0);
});
