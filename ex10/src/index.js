function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP"
      },
      gold: true
    },
    002: {   // Add a record here
      artist: "Pink Floyd",
      title: "The Wall",
      release_year: 1979,
      id: 11,
      formats: {
        1: "LP",
        2: "DVD",
        3: "Blu-Ray"
      },
    },
  };
}
myFunction()[2];
module.exports = myFunction;