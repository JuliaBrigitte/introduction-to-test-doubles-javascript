const getRandomBubbleTeaType = require('./bubble_tea_roulette_service');

test('should generate random bubble tea', () => {
  // Arrange
  // Stub to calls to Math.random to return 0.2
  jest.spyOn(global.Math, 'random').mockReturnValue(0.2);

  // Act
  const bubbleTea = getRandomBubbleTeaType();

  // Assert
  expect(bubbleTea).toBe('JASMINEMILKTEA');

  // Restore the default Math.random
  jest.spyOn(global.Math, 'random').mockRestore();
});

//  PEACHICETEA
test('should generate PEACHICETEA bubble tea', () => {
  // Arrange
  // Stub to calls to Math.random to return 0.2
  jest.spyOn(global.Math, 'random').mockReturnValue(0.7);

  // Act
  const bubbleTea = getRandomBubbleTeaType();

  // Assert
  expect(bubbleTea).toBe('PEACHICETEA');

  // Restore the default Math.random
  jest.spyOn(global.Math, 'random').mockRestore();
});

//   OOLONGMILKTEA: 'OolongMilkTea',
//   JASMINEMILKTEA: 'JasmineMilkTea',
//   MATCHAMILKTEA: 'MatchaMilkTea',
//   PEACHICETEA: 'PeachIceTea',
//   LYCHEEICETEA: 'LycheeIceTea',

test.each([
  {a: .1, expected: 'OOLONGMILKTEA'},
  {a: .3, expected: 'JASMINEMILKTEA'},
  {a: .5, expected: 'MATCHAMILKTEA'},
  {a: .7, expected: 'PEACHICETEA'},
  {a: .9, expected: 'LYCHEEICETEA'},
])('parameterised test bubble tea', ({a, expected}) => {
  // Arrange
  // Stub to calls to Math.random to return 0.2
  jest.spyOn(global.Math, 'random').mockReturnValue(a);

  // Act
  const bubbleTea = getRandomBubbleTeaType();

  // Assert
  expect(bubbleTea).toBe(expected);

  // Restore the default Math.random
  jest.spyOn(global.Math, 'random').mockRestore();
});