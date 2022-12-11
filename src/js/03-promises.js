const form = document.querySelector('.form')





function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, delay)
  }
)}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let promiseDelay = form.elements.delay.value;
  let promiseStep = form.elements.step.value;
  let amount = form.elements.amount.value;
  
  
  createPromise(i, promiseDelay)
  for (let i = 1; i <= amount; i += 1) {
    if (i === 1) {
      createPromise(i, promiseDelay)
    }
  
  }
  
  

  })

// createPromise(2, 555)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });