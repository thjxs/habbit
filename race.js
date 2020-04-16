async function countdown(seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(seconds);
    }, seconds * 1000);
  });
}
Promise.race([countdown(3), countdown(5)]).then((value) => {
  console.log(value);
});
