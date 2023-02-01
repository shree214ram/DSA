<script>
    function foo1()
    {
    return {
        bar: "hello"
    };
    }

    function foo2()
    {
    return
    {
        bar: "hello"
    };
    }

    console.log("foo1 returns:");
    console.log(foo1());
    console.log("foo2 returns:");
    console.log(foo2());
</script>

foo1 returns:
{bar: 'hello'}
foo2 returns:
undefined  // Why because javascript autometically adds ; , we have given Enter in between 
    1. return and  
    2. {
        bar: "hello"
    };

    So the Enter will add ;

    and {
        bar: "hello"
    };  will try to defined without declaration 

   ###  Note var a ; a is decleared   , var a=1 ; a is decalred and defined with value 1 ;

   ### console.log(a); var a; // it will print undefined means a is already declered but not defined any value ;
   