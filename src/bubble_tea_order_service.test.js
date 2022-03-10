const {createOrderRequest} = require('./bubble_tea_order_service');
const bubbleTeaType = require('./bubble_tea_type');
const bubbleTeaMessenger = require('./bubble_tea_messenger');
jest.mock('./bubble_tea_messenger');
jest.mock('./simple_logger');

// dummy data
let dummyPaymentDetails;

beforeEach(() => {
  dummyPaymentDetails = {
    name: 'Some person',
    address: '123 Some Street',
    debitCard: {
      digits: '123456',
    },
  };
});

afterEach(() => {
  jest.clearAllMocks();
});

test('test successful bubble tea order request', () => {
  // Arrange
  const bubbleTeaRequest = {
    paymentDetails: dummyPaymentDetails,
    bubbleTea: {
      type: bubbleTeaType.MATCHAMILKTEA,
    },
  };

  // Act
  const orderRequest = createOrderRequest(bubbleTeaRequest);

  // Assert
  expect(orderRequest.name).toBe(dummyPaymentDetails.name);
  expect(orderRequest.digits).toBe(dummyPaymentDetails.debitCard.digits);
  expect(bubbleTeaMessenger.sendBubbleTeaOrderRequestEmail)
      .toHaveBeenCalledWith(orderRequest);
  expect(bubbleTeaMessenger.sendBubbleTeaOrderRequestEmail)
      .toHaveBeenCalledTimes(1);
});


// The acceptance criteria is captured by the test function:
//     test('test successful bubble tea order request', () => {
// // test is in here
// });
// What do we need for our test?
//     Here's a summary of what we need to do for Arrange, Act, Assert:
//
// Assert
// Check that the result we get from calling the bubble_tea_order_service's createOrderRequest function produces the expected JSON response.
// Act
// Call the bubble_tea_order_service's createOrderRequest function with a JSON Object that represents a Bubble Tea Request
// Arrange
// Set up the JSON objects required to make a Bubble Tea Request that we can use for testing