//Creating a file using fs module and async/await.

const fs = require("fs"); //importing fs module

async function createFile() {
  try {
    const data = "Promise successful!"; // information to be displayed in the file

    await fs.promises.writeFile("demo.txt", data); //writes contents of data variable to the specified file

    console.log("File created and content written");
  } catch (err) {
    console.error(err);
  }
}

createFile();
