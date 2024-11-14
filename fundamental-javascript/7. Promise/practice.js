/*
  Practice 1: Create a Promise that simulates downloading a file. The Promise should resolve with a success message after a 3-second delay if the download is successful, and reject with an error message if the download fails.
*/

const downloadFile = () => {
  return new Promise((resolve, reject) => {
    let download = false;
    setTimeout(() => {
      if (download) {
        resolve("Download completed")
      } else {
        reject("Download failed")
      }
    }, 3000);
  })
}

const testDownloadFile = async () => {
  try {
    const response = await downloadFile();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

testDownloadFile();

/*
  Practice 2: Create a Promise that mimics an API call to fetch user data. The Promise should resolve with a simulated user object "{ name: 'John Doe', age: 30 }" after a 2-second delay. How would you design this Promise, and what would the resolved output contain?
*/

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: 'John Doe', age: 30 })
    }, 2000);
  })
}

getUser()
  .then((user) => {
    console.log(user);
  })
