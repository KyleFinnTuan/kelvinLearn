const myFirstPromise = new Promise((resolve, reject) => {
  let process = true;

  setTimeout(() => {
    if (process) {
      resolve('Promise fulfilled.')
    } else {
      reject('Promise failed')
    }
  }, 2000);
})

myFirstPromise
  .then((response) => console.log(response))
  .catch((error) => console.log(`Error: ${error}`))

const processingOnBuying = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      id: 1,
      name: 'Healing Potion',
      buyPrice: 200,
      sellPrice: 100,
      amount: 10
    })
  }, 2000);
})

processingOnBuying
  .then((item) => {
    console.log('First .then');
    console.log(item);
    return item.name;
  })
  .then((itemName) => {
    console.log('Second .then');
    console.log(itemName);
  })
  .catch((error) => {
    console.log(error);
  })