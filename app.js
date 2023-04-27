//A promise to display a message and call the promise

function matchResult() {
  let winflag = false; //variavle takes static boolean input

  //defining a promise
  return new Promise((resolve, reject) => {
    if (winflag) {
      resolve("We won the match"); // resolved response
    } else {
      reject({
        message: "We lost the match ", // message if promise fails
      });
    }
  });
}

// then catch block for matchresult function promise
matchResult()
  .then((message) => {
    console.log(message);
  })

  .catch((error) => {
    console.log(error.message);
  });
