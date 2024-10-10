// Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
  const arr=[];
  const newarr=array.forEach((obj)=>{
    arr.push(obj.username="!"+obj.username);
  })
  
  //Create an array using map that has all the usernames with a "? to each of the usernames
  
  const updatearr=array.map((obj)=>{
    return obj.username=obj.username+"?";
  })
  
  
  //Filter the array to only include users who are on team: red
  
  const colorarr= array.filter((obj)=>{
    return obj.team === "red";
  })
  
  
  //Find out the total score of all users using reduce
   const reducearr= array.map((i)=>i.score).reduce((acc,num)=>{
    return acc+num;
   },0);
  
  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
  const newArray2 = array.map(user => {
    return {
      ...user,
      items:user.items.map(item => item + "!") 
    };
  });
  
  console.log(newArray2);