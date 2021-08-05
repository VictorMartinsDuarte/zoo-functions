// const { species } = require('./data');
const data = require('./data');

const region = (location) => data.species.filter((value) => value.location === location);

function noParam(options) {
  if (!options) {
    return {
      NE: region('NE').map((element) => element.name),
      NW: region('NW').map((element) => element.name),
      SE: region('SE').map((element) => element.name),
      SW: region('SW').map((element) => element.name),
    };
  }
}
console.log(noParam());

// function includeName (options) {

//   const { includeNames } = options;
//   if (includeNames) {
//     return {
//       NE: [

//       ]
//     }
//   }
// }
// console.log(includeName());
