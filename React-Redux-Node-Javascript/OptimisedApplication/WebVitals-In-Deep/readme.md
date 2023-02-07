### Web Vitals Deep Dive 
    https://www.youtube.com/watch?v=fq0Ag8rC5GE&ab_channel=AkashIngole

    There are so many online tools are available for test and optimised our web application 

    1. Page Speed Insight 
    2. Google Light House 
### Webvitals :-
   ### First Contenful Paint :- 
    1. Properly Size Image :- (50% of the performance depends upon Image sizes)
        It will improve our wesite mostly , when our images are optimised . Every image should not be more then 20 to 25 kb . we can use "tinypng.com" for optimise our image . 
   ### Largest Contenful Paint :- 
    1. Preload Largest content Image :- 
        Largest content which is taking so much time , so we can preload in browser .
        Note :- Same like image if any font , css Or js file taking so much time to load we can preload and improve LCP 
        '<link rel="preload" as="image" href="asset/test.png">'
   ### Commulative Layout Shift :- 
    1. Write Placeholder Or default height on div :- 
        Let Say my data is coming from API (Asynchronus call)and its taking time to load so meanwhile our Div will fluctuate Or Layout will disturb 

        Note :- first check what will be the final height and width of div after load data and then , We can write the style={width:450px;height:400px;} Or we can add some placeholder image so our layout will not disturb . 
   ### Total Bloack Time 
        If in our web page so much script which is taking so much time to load . Or any loop code is there which is holding our page Or block for for some time , So we can unblock and we can excecute in last .

   <script> 
    for(let i=0;i<100000;i++){
        console.log(i)
    }
   </script>

   ###### We can unblock via add above script in Asynchrounus call : 
    1. First calculate the time , how much time needed for load our page .
    2. For Example 2000 milisecond OR 2 minit 

   <script>
   setTimeout(()=>{
        for(let i=0;i<100000;i++){
            console.log(i)
        }
   },2000) 

   
    
   </script>




    https://www.youtube.com/watch?v=NItNEiWmJdU&ab_channel=codedamn