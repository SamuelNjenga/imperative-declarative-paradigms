const { AsyncEffect } = require("@7urtle/lambda");
const { fs } = require("fs");

// deleteFile :: string -> AsyncEffect(string)
const deleteFile = (path) =>
  AsyncEffect.of((reject) => (resolve) =>
    fs.unlink(path, (error) =>
      error
        ? isEqual("ENOENT")(error.code)
          ? resolve(path)
          : reject(error)
        : resolve(path)
    )
  );

const functor = deleteFile("./index_four.js"); // returns AsyncEffect
functor.trigger(console.log)(console.log); //triggers the side effect
