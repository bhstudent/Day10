function myFunction(myObj, checkProp) {
  // Only change code below this line
  var movie = {
    title: "Titanic",
    song: "My Heart Will Go On",
    genre: "drama"
  }

  if(myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
  return "Not found";
  }
}

  console.log(movie.hasOwnProperty("title"));
 // movie.hasOwnProperty("song");
  //movie.hasOwnProperty("genre");
 // movie.hasOwnProperty("actor");
  //return "Change me!";
  

// Only change code above this line
module.exports = myFunction;