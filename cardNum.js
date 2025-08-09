/* 
1.4: unit test using TDD

~~~ LOGIC FLOW ~~~

i. check for card length 
  a. if length is < 12
   i. return Invalid
  b. if length is > 16
   i. return Invalid

   ... if neither are applicable then begin obscuring logic
  
   i. use slice to replace all but the last 4 digits with asterisks
    a. return obscured

*/
const cardNum = (cardNumber) => {
  // card length check
  const length = cardNumber.length;
  if (length < 12 || length > 16) {
    return "Invalid Credit Card";
  }
  // obscuring logic for passing lengths
  // hold onto last 4 digits
  const lastFour = cardNumber.slice(-4);
  // replace all numbers with asterisk and re - add last 4 digits to end of string
  const obscured = "*".repeat(length - 4) + lastFour;
  return obscured;
};

module.exports = cardNum;
