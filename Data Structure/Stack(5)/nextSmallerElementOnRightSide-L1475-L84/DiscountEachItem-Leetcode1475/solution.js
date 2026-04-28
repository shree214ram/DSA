var finalPrices = function(prices) {
    //14:04
    const st=[0]
    for(let i=1;i<prices.length;i++){
        while(st.length!=0 && prices[i]<=prices[st[st.length-1]]){
            const index=st.pop()
            prices[index]-=prices[i] 
/*In this question we are storing the difference but in simple next smaller on right side 
nextSmallerElementOnRightSide.js we are keeping direct current Element 
*/
        }
        st.push(i)
    }
    return prices;
};