/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    //first i thought i will use 2 for loop but it may not help for eight we shoud go plus one in column or down in  row in same column 
    //const wordArr=word.split("")
    // for(let i=0;i<board.length;i++){
    //     let spr=board[i];
    //     for(let j=0;j<board[i].length;j++){
    //         spr+=board[i][j];
    //         if()
    //     }
    // }
    //Themn i Moved to below function 
    // first base case 
    if(board.length==1 && board[0].length==1){
        return board[0][0]==word
    }
    const rec=(i,j,str)=>{
        //Base cases 
        if(i>board.length)return 
        if(board[i]==undefined || j>board[i].length)return 
        console.log(str,"str");
            console.log(word,"word")
        if(str.length==word.length ){
            console.log(str,"str==");
            console.log(word,"word===")
            return str==word // Or we may check via word.includes(str), but it may extra time compaxity to run include function , we can direct comoare 
        }
        if(word.includes(str)){
            newStr=str+board[i][j]
            // eight we shoud go plus one in column or down in row in same column 
            return rec(i,j+1,newStr) || rec(i+1,j,newStr);
        }else{
            return rec(i,j+1,"") ; //if not mached then start new string from screch 
        }
    }
    return rec(0,0,"")
};