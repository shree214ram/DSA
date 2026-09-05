<script>
let arr = [
  {
    id: 1,
    name: "Amit",
    children: [
      {
        id: 2,
        name: "Sanjeev",
        children: [
          {
            id: 3,
            name: "Pooja"
          },
          {
            id: 4,
            name: "sunny",
            children: [
              {
                id: 8,
                name: "Pooja"
              },
              {
                id: 9,
                name: "Rahul"
              }
            ]
          }
        ]
      },
      {
        id: 5,
        name: "Arpita"
      }
    ]
  },
  {
    id: 6,
    name: "Kapil",
    children: [
      {
        id: 7,
        name: "Rakhi"
      }
    ]
  }
];

//output : return the id of object in which name is "Rahul"
//3:35

recursion(arr);
function recursion(arr) {
  //calculation
  for (let value of arr) {
    //base case
    if (value.name === "Rahul") {
      console.log(value.id);
      return
    } else if (value.children) {
      //recursion
      if (Array.isArray(value.children)) {
        return recursion(value.children);
      }
    }
  }
}
</script>