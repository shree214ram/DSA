# Async And Differ 
https://www.freecodecamp.org/news/javascript-performance-async-defer/

https://www.youtube.com/watch?v=IrHmpdORLu8&ab_channel=AkshaySaini

when we load a html page so there are 2 parsing excecuted 
1) HTML Parsing 
2) Javascript Parsing 



### Normal :-
Once we use normal loading so first HTML parsing starts and once html page found any script tag than html pasing pause the parsing and starts the loading script code and wait for script excecution output then again starts HTML Parsing .
    |---------------|                         |-----------|
        HTML        |-----------| |-----------|   
                      Script         Output      HTML
### Async :- 
Once we use Async loading so first HTML parsing starts and once html page found any script tag than asynchronously starts the loading script code and wait for script excecution output then again starts HTML Parsing .
      |---------------|             |-----------|
        HTML  |-------| |-----------|   
                Script      Output      HTML
### Differ :- 
Once we use Differ loading so first HTML parsing starts and once html page found any script tag than asynchronously starts the loading script code and then finishes HTML Parsing first and then script excecuted for output  .            HTML
      |---------------|-----------|
        HTML          |-----------| |-----------|   
                      Script         Output      

### Important Note :- When to use which one 
1. if we have some asynchronous scripts call in which some scriptis dependent on other , so asynchronous script loading does not guarantee that the asynchronus will be excecuted as flow required . It may generate error . On that Case Differ is best because differ maintain the order . 

2. Some time a few scripts does not required any order its required after full HTML parsing then Differ is best . As like google analytics 