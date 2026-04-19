1. banifits of context over redux 
        1. what is context
        2. what is consumer hell 
        3. how can we resolve consumer hell 
        4. what is useContext
        5. what is benifits of useContaxt Over Redux 
     
https://www.youtube.com/watch?v=EynAnD8nDfc&ab_channel=ThapaTechnical
https://www.youtube.com/watch?v=kSIm78jmqhE&ab_channel=ThapaTechnical

2. Difference between Redux and Context API 
https://www.scalablepath.com/react/context-api-vs-redux

//I think Redux plays a big role when you need to develop a complex application, that requires to integrate features that have a lot of states or in our case actions. One might argue that we can use useReducer apis inside a context to handle the long and nested states, updating them when particular actions are performed, but then just like reinventing the wheel we are developing something like redux only. What I understand is both are two different ways of using the context and reducer features that React provides, we can choose which one to use.

But when there is the case of fetching data from server, I think the latest RTK (Redux Toolkit) is very far ahead as it gives a solution to integrate apis, and render data into state, which in case of context apis, we have to manually integrate it
