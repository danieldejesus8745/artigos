function asyncFunction() {
  return new Promise(
    function (resolve, reject) {
      //...
      resolve(result);
      //...
      reject(error);
    }
  );
}

asyncFunction()
.then(result => {/*...*/})
.catch(error => {/*...*/});