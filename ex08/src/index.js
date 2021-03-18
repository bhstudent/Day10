function getUsername(email) {
  var username = "";
  // Only change code below this line
  var lookup = {
    "user1": "user1@email.com",
    "user2": "user2@email.com",
    "user3": "user3@email.com",
    "user4": "user4@email.com",
    "user5": "user5@email.com",
    "user6": "user6@email.com"
};
  
  username = lookup[email];
  return username;
}
// Only change code above this line

console.log(getUsername("user2@email.com"));
module.exports = getUsername;