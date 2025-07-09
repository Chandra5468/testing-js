/*
let userIds = [1,2,3,4,5]
const fetchUsers = async () => {
    try{
  const userPromises = userIds.map(async (id) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    return res.json();
  });

  const users = await Promise.all(userPromises);
  console.log("Data is", users);
    }
    catch(e){
        console.log("This is error ", e.message)
    }
};

fetchUsers()

*/

let abc = {

}

module.exports = abc