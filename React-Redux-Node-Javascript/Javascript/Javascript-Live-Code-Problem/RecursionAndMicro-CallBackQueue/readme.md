### Question what will be the output print in console of below program ??
function Inc(N) {

    if (N == 1) {
      console.log(N);        //1 first 
      setTimeout(() => {
        console.log(N);      //1 Third 
      });
      return;
    }
  
    Inc(N - 1);
    console.log(N);          //2 second , 3 second , 4 second 
    setTimeout(() => {
      console.log(N);        //2 fourth , 3 fourth , 4 fourth
    });
  }
  
  Inc(4);
  

#### Expected output 
```
  1   
  2   
  3   
  4
  
  1   
  2
  3
  4
```

# for our understanding 

<script>
function Inc(N) {

  if (N == 1) {
    console.log(N,"first");
    setTimeout(() => {
      console.log(N,"second");
    });
    return;
  }

  Inc(N - 1);
  console.log(N,"third");
  setTimeout(() => {
    console.log(N,"fourth");
  });
}

Inc(4);
</script>

### Output :- 
```
 1 'first'  
 2 'third'
 3 'third'
 4 'third'


 1 'second'
 2 'fourth'
 3 'fourth'
 4 'fourth'
```
### first of all the recursion call will finish and once it will reach to condition N==1 then It will Go Inside that condition 
1. console will print 1 
2. set Time out will be go to Callback Queue Or Macro Task Queue because this is Asynchronous call With N = current value 1
3. console.log(N,"third"); will print N of n value on that time 
    2 'third'
    3 'third'
    4 'third'
4. Now 2. step will print  
    1 'second'
5. Now remaining callback queue will excecute 
    2 'fourth'
    3 'fourth'
    4 'fourth'    
    

