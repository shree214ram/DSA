/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    //14:04
    const res=[]
    const st=[prices[0]]
    for(let i=1;i<prices.length;i++){
        if(st.length==0){
            st.push(prces[i]);
            continue;
        }

        while(st.length!=0 && prices[i]<=st[st.length-1]){
            res.push(st[st.length-1]-prices[i])
            st.pop()
        }
        st.push(prices[i])
    }
    while(st.length!=0){
            res.push(st[0])
            st.shift()
        }
    return res;
};