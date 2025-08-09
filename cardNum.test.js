/* 
1.4: unit test using TDD

~~~ REQUIREMENTS ~~~
i. write a single test function to obscure a credit card number
    a. the number should be between 12-16 numbers
        i. any other size should return 'Invalid Credit Card'
ii. the function must consist of the following...
    a. be a STRING
    b. RETURNS a STRING
iii. you DO NOT have to validate characters that are numbers
iv. you should have positive AND negative unit tests for your function
    a. the positive test will return obscured card number
    b. the negative test will return invalid card 

~~~ MY TEST STRATEGY FLOW ~~~
  i. test that the length of card that is less than 12 digits returns invalid
  ii. test that 12 digit card number is accepted and obscured to set the minimum length
  iii. test that anything above 16 digits returns invalid to set the maximum length
  iv. test that 16 digit card number is accepted and obscured 

~~~ OBSCURING PATTERN ~~~  
  i. i will be obscuring everything but the last 4 digits with asterisks

*/

const cardNum = require("./cardNum");

// create test suite using describe that accepts a title and callback

describe("obscure credit card digits", () => {
  // test that the length of card that is less than 12 digits returns invalid
  test("As a user, when I provide a card number with less than 12 digits, the function returns 'Invalid Credit Card'", () => {
    expect(cardNum("12345678911")).toBe("Invalid Credit Card");
  });

  // test that 12 digit card number is accepted and obscured to set the minimum length
  test("As a user, when I provide a card number with 12 digits, the function returns an obscured number", () => {
    expect(cardNum("123456789101")).toBe("********9101");
  });

  // test that anything above 16 digits returns invalid to set the maximum length
  test("As a user, when I provide a card number with more than 16 digits, the function returns 'Invalid Credit Card'", () => {
    expect(cardNum("12345678910120121")).toBe("Invalid Credit Card");
  });

  // test that 16 digit card number is accepted and obscured
  test("As a user, when I provide a card number with 16 digits, the function returns an obscured number", () => {
    expect(cardNum("1234567891012345")).toBe("************2345");
  });
});
