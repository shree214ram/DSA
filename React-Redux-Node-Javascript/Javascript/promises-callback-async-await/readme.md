#Promise :- 

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