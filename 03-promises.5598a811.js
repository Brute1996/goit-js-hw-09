function e(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();let n=parseInt(t.currentTarget.elements.delay.value),o=parseInt(t.currentTarget.elements.step.value),r=parseInt(t.currentTarget.elements.amount.value);for(let t=1;t<=r;t+=1)e(t,n).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),n+=o}));
//# sourceMappingURL=03-promises.5598a811.js.map
