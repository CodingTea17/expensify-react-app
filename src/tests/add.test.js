const add = (a, b) => a + b;
const generateGreeting = (name = "Anon") => `Hello, ${name}!`

test('should add two numbers together', () => {
  const result = add(3, 4);

  // if (result  !== 7) {
  //   throw new Error(`4 plus 3 is not ${result}. Expect 7.`)
  // }
  expect(result).toBe(7);
});

test('should return an interpolated greeting from a name', () => {
  const result = generateGreeting("Bob");
  expect(result).toBe("Hello, Bob!");
});

test('should return an interpolated greeting when there is no name', () => {
  const result = generateGreeting();
  expect(result).toBe("Hello, Anon!");
});
