const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test('should generate greeting'), () => {
  const result = generateGreeting("George");
  expect(result).toBe('Hello George!');
}



test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);

  // if (result !== 7) {
  //   throw new Error(`you added 4 plus 3. Result was ${result}. Expected 7`);
  // }
});

test('should generate greeting from name', () => {
  const result = generateGreeting('Larry');
  expect(result).toBe('Hello Larry!');
});