function firstUniqChar(s) {
  let sa = s.split('');
  let index;
  let value;
  let tmp = [];
  for (let i = 0; i < sa.length; i += 1) {
    if (tmp[sa[i]] == undefined) {
      tmp[sa[i]] = 0;
    }
    tmp[sa[i]]++;
  }
  for (let key in tmp) {
    if (tmp[key] == 1) {
      value = key;
      break;
    }
  }
  for (let i = 0; i < sa.length; i += 1) {
    if (sa[i] == value) {
      index = i;
    }
  }
  return index != undefined ? index : -1;
}

function matchParentheses(str) {
  const stack = [];
  const mapper = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  const leftParentheses = ['(', '[', '{'];

  for (let i in str) {
    if (leftParentheses.indexOf(str[i]) > -1) {
      stack.push(str[i]);
    } else {
      if (mapper[str[i]] !== stack.pop()) {
        return false;
      }
    }
  }

  if (stack.length > 0) {
    return false;
  }
  return true;
}

function reverseString(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

/**
 * get words
 * trim whitespaces
 * @param  {string} str
 * @return {array}
 */
function getWords(str) {
  return str.trim().split(/\s+/g);
}

module.exports = {
  firstUniqChar,
  matchParentheses,
  reverseString,
  getWords
};
