console.log("hii")

//System Design Practices 

//default Data 
// const myData = {
//   sunny : ["rahul", "raj" , "ram" ],
//   rahul : ["sima", "shyam" , "sunny", "raj" , "ram" ]
//  shankar : sima , shyam 
// }

// sima : 2, shyam ; 2
const myData = new Map();
// AddUser(U1) => Add user to the users (Registering user)
const AddUser = (newData) => {
  if (myData.get(newData.name)) {
    console.log("User is Ralready Exist")
    return false
  } else {
    myData.set(newData.name, [])
  }
}
// AddFriendship(U1, U2) => Add U1 and U2 as friends.
const AddFriendship = (U1, U2) => {
  if (!myData.get(U1) || !myData.get(U2)) {
    console.log("Any One of them user is not registerd in System")
    return false
  } else if (myData.get(U1).includes(U2)) {
    console.log("They Are already  friend")
  }
  else {
    const u1oldData = myData.get(U1);
    u1oldData.push(U2)
    myData.set(U1, u1oldData)

    const u2oldData = myData.get(U2);
    u2oldData.push(U1)
    myData.set(U2, u2oldData)
  }
}
// MutualFriends(U1, U2) => return mutual friends of U1 and U2.
const MutualFriends = (U1, U2) => {
  if (!myData.get(U1) || !myData.get(U2)) {
    console.log("Any One of them user is not registerd in System")
    return false
  }
  else {
    const u1oldData = myData.get(U1);
    // u1oldData.push(U2)
    // myData.set(U1,u1oldData)

    const u2oldData = myData.get(U2);
    const mutalFrdArray = []
    u2oldData.forEach(element => {
      if (u1oldData.includes(element)) {
        mutalFrdArray.push(element);
      }
    });
    return mutalFrdArray;
  }
}
// GetSuggestedFriends(U1) => suggested 1st degree of friends to U1.