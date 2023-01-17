# CORS :-
https://www.youtube.com/watch?v=tcLW5d0KAYE&ab_channel=AkshaySaini

### cross orgin resource sharing :- 

from one domain to another doamin api calling , browser uses the cors policy to secure the api 
    https://sunny.com 
            1. same domain different protocall :- http://sunny.com {fail}
            2. Same Domain subdomain :- api.sunny.com {fail}
            3. Same Domain different Port :- sunny.com/3000 {fail}
            4. different Domain :- kamini.com {fail}


            A      Preflight/Option Call             B
                    ---------------->

                    Addition Header 
                    [Access control allow origin: *] 
                    [Access control allow method: get/post/put/delete] 
                    {along with request}
                    <----------------

                     Actual Post API Call 
                    ---------------->

1. Brouser cors policy sends a "preflyight api" made before "actual api" call from A to B 
2. B Server sends some additional header peramerter to reply that this is a valid API   
3. Actual Post API call  
