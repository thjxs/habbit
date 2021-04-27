module.exports = {
  isValidXss(requestURL) {
    let xssRegex = /(\b)(on\w+)=|javascript|(<\s*)(\/*)script/gi;
    return xssRegex.test(requestURL);
  },
};
