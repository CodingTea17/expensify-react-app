const add = (a, b) => a + b;

test('should add two numbers together', () => {
  const result = add(3, 4);

  // if (result  !== 7) {
  //   throw new Error(`4 plus 3 is not ${result}. Expect 7.`)
  // }
  expect(result).toBe(7);
});
