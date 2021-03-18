// Create lion object here
var lion = {
  name: "Simba",
  legs: 4,
  tails: 1
};
// End of lion object

function myFunction(propName, propValue) {
 lion[propName] = propValue;
  return lion;
}
// Only change code below this line

console.log(myFunction("roar", "roar-roar"));

// Only change code above this line

module.exports = myFunction;