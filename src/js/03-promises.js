const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let promiseDelay = parseInt(e.currentTarget.elements.delay.value);
  let promiseStep = parseInt(e.currentTarget.elements.step.value);
  let amount = parseInt(e.currentTarget.elements.amount.value);

  
  
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, promiseDelay)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });

    promiseDelay += promiseStep;
  }
  })

  function createPromise(position, delay) {
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve({position, delay})
        } else {
          reject({position, delay})
        }
      }, delay)
    }
  )}

