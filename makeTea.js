function makeTea() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Tea is Ready!");
    }, 2000);
  });
}
function prepareBreakfast() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Toast is ready!");
    }, 3000);
  });
}
prepareBreakfast(makeTea().then((msg) => console.log(msg)))
  .then((tos) => {
    console.log(tos);
  })
  .catch((err) => {
    console.log(err);
  });
