### Event Bubbling And Event Capturing 
    https://www.youtube.com/watch?v=aVSf0b1jVKk

   ### Event Bubbling and event capturing are the technique for triggering events in a different manner for hierarchy Level . Let say 3 div have 3 different event function which is need to be handle via bottomup{Bubbling}/topDown{Capturing}
    1. Event Bubbling Goes from Bottom to Top {no any parameter Or false}
    2. Event Capturing Goes from Top to Bottom {no any parameter Or false}
    3. First Event Capturing covers and then Event bubbling 
    4. By default it understand "false" which is event bubbing
    
    ```
    Event Capturing              Event Bubbling
                                    ^
        |                           | 
        |                           |
        |                           |
        |                           |
          | | | | | | | | | | | | |
    ```
   <script>
    const gp = document.getElementById("gp")
    gp.addEventListener("click",()=>{
        console.log("GrandParent Clicked")
    },true)
    </script>

   #### Case 1 (Event Capturing - Click At inner most Child):- 
        GrandParent-true,Parent-true,Child-true

        output :- GrandParent Clicked,Parent Clicked,Child Clicked
   #### Case 2 (Event Bubbling - Click At inner most Child):- 
        GrandParent-false,Parent-false,Child-false

        output :- Child Clicked, Parent Clicked, GrandParent Clicked
   #### Case 3 (Mixin):- 
        GrandParent-true,Parent-false,Child-true

        output :- GrandParent Clicked, Child Clicked, Parent Clicked

        {why because first cover the event capturing and then event bubbling}
   #### Case 4 (Mixin):- 
        GrandParent-true,Parent-false,Child-false

        output :- GrandParent Clicked, Child Clicked, Parent Clicked
        {why because first cover the event capturing and then event bubbling start with inner most clicked child first }

      

### Stop propogation :- 
    We can stop propogation at any event .
    If we want to stop any further event after any event callback we can stop with the help of stopPropogation
    (e) =>{
         e.stopPropagation();
    }


