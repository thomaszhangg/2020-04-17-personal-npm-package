module.exports.reverseString = (string) => {
  if (typeof string !== 'string') throw new TypeError('Thomas wants a string!');
  return string.split('').reverse().join('');
};

module.exports.kebabToCamel = (string) => {
  if (typeof string !== 'string') throw new TypeError('Thomas wants a string!');
  const camelizeREGEX = /-(\w)/g;
  return string.replace(camelizeREGEX, (_, c) => (c ? c.toUpperCase() : ''));
};

module.exports.numWithCommas = (num) => {
  if (typeof num !== 'number') throw new TypeError('Thomas wants a number!');
  let numStr = String(num);
  let result = '';
  let count = 0;

  for (let i = numStr.length - 1; i >= 0; i--) {
    result = numStr[i] + result;
    count++;

    if (count % 3 == 0 && i != 0) {
      result = ',' + result;
    }
  }
  return result;
};

module.exports.summarize = (string, max) => {
  if (typeof string !== 'string') throw new TypeError('Thomas wants a string!');
  if (string.length > max) return string.substring(0, max - 3) + '...';
  return string;
};

module.exports.squareNum = (num) => {
  if (typeof num !== 'number') throw new TypeError('Thomas wants a number!');
  return num ** 2;
};
