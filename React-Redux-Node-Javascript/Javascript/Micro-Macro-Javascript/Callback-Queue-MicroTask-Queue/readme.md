# Callback Queue Vs Microtask Queue 
https://www.youtube.com/watch?v=hIFkCrkkHMg&ab_channel=procademy
1. Call Stack {*Global excecution context}
2. Event Loop 
3. Web API
4. Microtask queue     [console.log,promise]
5. Callback{Macro} queue  [setTimeout,setIntervals]

    Call Stack          

### Javascript Engine has one "Call STack" . in the Call stack there is a "Global Excecution context" . "Global Excecution context" run the code line by line
### when a javascript code excecuted first it goes to callstck and then it converts into Callback Or Microtask Queue . 
### Once any code excecuted in GEC it will be pop out from Call Stack . 
### first all micro task queue will be excecuted one by one Via Event Loop [console.log,promise] and then Callback Queue [setTimeout,setIntervals]  




# Javascript event looping  || Event loop in javascript?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
https://hackernoon.com/understanding-js-the-event-loop-959beae3ac40


# Callback function in javascript?

https://stackoverflow.com/questions/40786014/javascript-button-onclick-callback?rq=1
https://developer.mozilla.org/en-US/docs/Glossary/Callback_function


