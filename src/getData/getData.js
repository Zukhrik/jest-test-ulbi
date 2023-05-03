const axios = require("axios");
const mapArrToString = require("../mapArrToString/mapArrToString");

const getData = async () => {
  try{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const usersId = response.data.map(user => user.id);
    
    return mapArrToString(usersId)
  }catch (e) {
    return console.error(e, 'error')
  }
};

module.exports = getData