https://www.youtube.com/watch?v=81NGEXAaa3Y&ab_channel=AkshaySaini
https://www.youtube.com/watch?v=81NGEXAaa3Y&ab_channel=AkshaySaini
https://www.youtube.com/watch?v=tJhA0DrH5co&ab_channel=AkshaySaini

https://webdesign.tutsplus.com/tutorials/javascript-debounce-and-throttle--cms-36783
### Debouncing :- 
##### Only call a function after a certain time limit  . 
const button = document.getElementById("button")
const debounceFn = (func,delay) =>{
	//@mistake 3 at place of setTimeout i have written setTimeOut
	//step 1 : define a timer let variable
	let timer ;
	//step 2 : return a function
	return function(...args){
		//step 3
		clearTimeout(timer)
		// 1. Apply {purana jamane this.bind}
		// timer =  setTimeout(()=> func.apply(this,arguments),delay)


		// 2. arraow {...args}
		timer =  setTimeout(()=> func(...args),delay)
	} 
	
}
//@mistake 1 at place of button.addEventListener i have written window
//@mistake 2 at place of addEventListener i have written addEventlitner
button.addEventListener("click",debounceFn(()=>{
	console.log("shree");
},3000))

### Throttling :- 
##### Difference between Two click event is greater than Delay time limit then only call the event . 
let throttleTimer;
const throttle = (callback, time) => {
  if (throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
        callback();
        throttleTimer = false;
    }, time);
}
window.addEventListener("scroll", () => { 
  throttle(handleScrollAnimation, 250);
});