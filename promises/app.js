function createAndReturnPromise() {
  const pro = new Promise((resolve, reject) => {
    // resolve("Success");
    reject("fail");
  });
  return pro;
}

createAndReturnPromise()
  .then((value) => console.log(value))
  .catch(function () {
    console.log("something went wrong");
  });

window.addEventListener(
  "unhandledrejection",
  (event) => {
    console.log(`the promise ${event.type} is rejected for ${event.reason}`);
  },
  false
);
