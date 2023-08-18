module.exports = function check(str, bracketsConfig) {
  const opening = bracketsConfig.map((pair) => pair[0]);
  const closing = bracketsConfig.map((pair) => pair[1]);
  let stack = [];

  for (let char of str) {
    if (opening.includes(char) && closing.includes(char)) {
      if (stack.length > 0 && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if (opening.includes(char)) {
      stack.push(char);
    } else if (closing.includes(char)) {
      const openingBracket = opening[closing.indexOf(char)];
      if (stack.length === 0 || stack.pop() !== openingBracket) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
