
# First I was in flow of Monotonique Stack Template as i solved some problems ,so i though i will be the same 

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length==1){return false}
    const A=s;
    const st=[];
    const obj={"}":"{","]":"[",")":"("}
    for(let i=0;i<A.length;i++){
        console.log(st);
        console.log(A[i],"a[i]");
        console.log(st[st.length-1],"last");
        console.log(obj[A[i]],"obj value");
        let check =0
        while(st.length>0 && obj[A[i]]==st[st.length-1]){
            //) 
            console.log("while")
            st.pop();

        }
        if(['[','{','('].includes(A[i])){
            st.push(A[i])
        }
    }
    console.log(st,"finalst")
    return st.length==0;
};

# But i could not recognize we dont need to chek in while loop even we can immidietelly return false if current element reverse is not equal to last element of stack

<script>
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length==1){return false}
    const A=s;
    const st=[];
    const obj={"}":"{","]":"[",")":"("}
    for(let i=0;i<A.length;i++){
       
        let check =0
        
        if(['[','{','('].includes(A[i])){
            st.push(A[i])
        }else {
            if(obj[A[i]]==st[st.length-1]){
                st.pop();
            }else{
                return false
            }
        }
    }
    return st.length==0;
};

</script>

# More Optimized way without Stack  , We can use the top pointer and update the Array itself and check if in the last top = -1 then return true 

<Script>
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2!=0){return false}
    const A=s.split("");
    const obj={"}":"{","]":"[",")":"("}
    let top=-1
    for(let i=0;i<A.length;i++){
       
        if(['[','{','('].includes(A[i])){
            A[++top]=A[i] //Initially i did mistake i used top++ then its faled becuse we need to increse top prior and then update 
        }else {
            if(top==-1) return false
            if(obj[A[i]]!=A[top]){
                return false
            }
            top--
        }
    }
    return top==-1;
};
