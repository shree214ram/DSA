# Promise :- 
https://www.youtube.com/watch?v=ap-6PPAuK1Y&ab_channel=AkshaySaini
https://www.youtube.com/watch?v=U74BJcr8NeQ&ab_channel=AkshaySaini
### what is Promise :

Promise is a object which is responsible for evantually completion of asynchronous operation .
It has 2 main things PromiseStatus and PromiseResult 
1. Promise Status :-
    1. Resolve
    2. Reject 
    3. Pending
2. Result 

### What is the benifits of promise 
1. Handle Callback Hell
    const cart = [a,b,c]
    function createOrder(cart,(orderID)=>{
        proceedToPayment(orderID,(paymentInfo)=>{
            thirdAPI(parameter,()=>{


            })
        })
    })
2. Surity to callback once only ,after sucesfully done first asynchronous call . Will not call twise only once.
3. We can handle the asynchronus call beautifully and handle Sucess/Failure easily .

### Promise Chaining :-
1. ###### Creating custom promise
    const myPromise = new Promise((resolve,reject)=>{
            createOrder(cart)
    })
2. ###### Handle promise object

    myPromise.then(orderId=>{
        proceedToPayment(orderID)
    }).then(orderId=>{
        proceedToPayment(orderID)
    })

# Promise/Async/Await/Callback :- 

   ##### Promise for handle asycronus call and remove call back hell and batter optimised and beautifull code 
   ##### Asyc also usefull for handle  asycronus call,await will wait till async call is not finished 

https://www.youtube.com/watch?v=bWaucYA1YRI&ab_channel=TechnicalSuneja