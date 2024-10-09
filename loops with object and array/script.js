// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
// 2. Create an array which contains the object you have made above and name the array "database".
const database=[{
        name:"anmol",
        password:"12345678"
    },
    {
        name:"sujal",
        password: "123456"
    }];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

const newsfeed=[{name:"Isha",feed:"Hey I'm in the hyedrabad"},{name:"Arun",Feed:"Hey I'm an ARMY man"}];


function getaccess(){
    var user=prompt("enter the username");
    var pass=prompt("enter the password");
    for(var i=0;i<database.length;i++){
        if(database[i].name===user && database[i].password===pass){
            alert("you got the access");
            console.log(newsfeed);
        }else{
            alert("Username or password is incorrect");
        }
    }
}