const data = require('./data');
const { species } = require('./data');

const region = (location) => species.filter((value) => value.location === location);

function noParam() {
  return {
    NE: region('NE').map((element) => element.name),
    NW: region('NW').map((element) => element.name),
    SE: region('SE').map((element) => element.name),
    SW: region('SW').map((element) => element.name),
  };
}
console.log(noParam().NE[0]);
// console.log(region('NE'));

const animalNames = (residents) => residents.map(({ name }) => name);

const regionAnimals = (objArray, sort, sexParam) => objArray.map(({ name, residents }) => {
  const justFilteredNames = residents.filter(({ sex }) => sex === sexParam)
    .map((value) => value.name);
  if (typeof sexParam === 'string' && sort) return ({ [name]: justFilteredNames.sort() });
  if (typeof sexParam === 'string') return ({ [name]: justFilteredNames });
  if (sort) return ({ [name]: animalNames(residents).sort() });
  return ({ [name]: animalNames(residents) });
});

function dynamic(sort, sexParam) {
  return Object.keys(noParam()).reduce((acc, cur) => {
    acc[cur] = regionAnimals(region(cur), sort, sexParam);
    return acc;
  }, {});
}
console.log(dynamic(true, 'female').NE[0]);

// console.log(includeTrue().SW[1].snakes.sort());
// console.log(includeTrue().NE);

// const includeTrue = () => ({
//   NE: regionAnimalsReduce(region('NE')),
//   NW: regionAnimalsReduce(region('NW')),
//   SE: regionAnimalsReduce(region('SE')),
//   SW: regionAnimalsReduce(region('SW')),
// });
// Vou deixar esse comentário gigante aqui, pra me lembrar do quanto eu complico as coisas...
// // OLHA ESSA LOUCURA QUE EU TENTEI FAZER! Antes de perceber, que era só acrescentar um 'sort()' na função que fiz do requisito passado...
// // const sortedAnimalNames = Object.keys(includeTrue()).reduce((acc, cur) => {
// //   return Object.values(includeTrue()[cur]).reduce((acu, atual, i) => {
// //     const currentAnimal = Object.keys(atual);
// //     acc.push({ [currentAnimal]: includeTrue()[cur][i][currentAnimal].sort() });
// //     return acc;
// //   }, []);
// // }, []);
// // sortedAnimalNames.reduce((acc, cur, i) => {
// //   Object.keys(includeTrue()).reduce((acu, atual) => {
// //     region(())
// //   })
// // }, []);

// function sortedTrue() {
//   const sortedAnimalNames = (objArray) => objArray.reduce((acc, cur) => {
//     acc.push({ [cur.name]: animalNames(cur).sort() }); return acc;
//   }, []);
//   return {
//     NE: sortedAnimalNames(region('NE')),
//     NW: sortedAnimalNames(region('NW')),
//     SE: sortedAnimalNames(region('SE')),
//     SW: sortedAnimalNames(region('SW')),
//   };
// }
// // console.log(Object.keys(includeTrue()));
// // console.log(sortedTrue());

// function includeAndSorted(param) {
//   const { sorted } = param;
//   if (sorted) return sortedTrue();
//   if (includeNames) return includeTrue();
// }

// function filterBySex(param) {
//   const { sex } = param;
//   if (typeof sex === 'string') {
//     const filteredNames = (element) => element.residents.map((animals) => animals)
//       .filter((value) => value.sex === sex);
//     const filteredAnimalsNames = (objArray) => objArray.reduce((acc, cur, i) => {
//       const justFilteredNames = filteredNames(cur).map((value) => value.name);
//       if (!filteredNames(cur)[i] === []) {
//         return acc.push({ [cur.name]: [] });
//       }
//       acc.push({ [cur.name]: justFilteredNames }); return acc;
//     }, []);
//     return {
//       NE: filteredAnimalsNames(region('NE')),
//       NW: filteredAnimalsNames(region('NW')),
//       SE: filteredAnimalsNames(region('SE')),
//       SW: filteredAnimalsNames(region('SW')),
//     };
//   }
// }
// // console.log(filterBySex({ sex: 'female' }));

// function includeAndSex(param) {
//   const { includeNames, sex } = param;
//   if (includeNames && sex === 'female') return filterBySex(param);
//   if (includeNames && sex === 'male') return filterBySex(param);
// }

// // console.log(includeAndSex({ includeNames: true, sex: 'female' }));

// function sortedAnimalsBySex(param) {
//   const { sex } = param;
//   const filteredNames = (element) => element.residents.map((animals) => animals)
//     .filter((value) => value.sex === sex);
//   const filteredAnimalsNames = (objArray) => objArray.reduce((acc, cur, i) => {
//     const justFilteredNames = filteredNames(cur).map((value) => value.name);
//     if (!filteredNames(cur)[i] === []) {
//       return acc.push({ [cur.name]: [] });
//     }
//     acc.push({ [cur.name]: justFilteredNames.sort() });
//     // console.log(acc);
//     return acc;
//   }, []);
//   return {
//     NE: filteredAnimalsNames(region('NE')),
//     NW: filteredAnimalsNames(region('NW')),
//     SE: filteredAnimalsNames(region('SE')),
//     SW: filteredAnimalsNames(region('SW')),
//   };
// }
// // console.log(sortedAnimalsBySex({ sex: 'female' }));

// function sexAndSorted(sex, sorted) {
//   if (sex === 'female' && sorted) return sortedAnimalsBySex(sex);
//   if (sex === 'male' && sorted) return sortedAnimalsBySex(sex);
// }

module.exports = {
  noParam,
  dynamic,
};
