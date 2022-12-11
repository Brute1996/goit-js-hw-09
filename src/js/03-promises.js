const form = document.querySelector('.form')

form.addEventListener('input', (e) => {
  console.log(form.elements.delay.value);
  console.log(form.elements.step.value);
  console.log(form.elements.amount.value);
  
})

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

form.addEventListener('submit', () => {
  
})

// createPromise(2, 555)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });