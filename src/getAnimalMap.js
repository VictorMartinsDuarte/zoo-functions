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
// console.log(noParam());
console.log(region('NE'));

const animalNames = (element) => element.residents.map((value) => value.name);
const regionAnimalsReduce = (objArray) => objArray.reduce((acc, cur) => {
  acc.push({ [cur.name]: animalNames(cur) }); return acc;
}, []);

const includeTrue = () => ({
  NE: regionAnimalsReduce(region('NE')),
  NW: regionAnimalsReduce(region('NW')),
  SE: regionAnimalsReduce(region('SE')),
  SW: regionAnimalsReduce(region('SW')),
});

// console.log(includeTrue().SW[1].snakes.sort());
// console.log(includeTrue());

// OLHA ESSA LOUCURA QUE EU TENTEI FAZER! Antes de perceber, que era só acrescentar um 'sort()' na função que fiz do requisito passado...
// const sortedAnimalNames = Object.keys(includeTrue()).reduce((acc, cur) => {
//   return Object.values(includeTrue()[cur]).reduce((acu, atual, i) => {
//     const currentAnimal = Object.keys(atual);
//     acc.push({ [currentAnimal]: includeTrue()[cur][i][currentAnimal].sort() });
//     return acc;
//   }, []);
// }, []);
// sortedAnimalNames.reduce((acc, cur, i) => {
//   Object.keys(includeTrue()).reduce((acu, atual) => {
//     region(())
//   })
// }, []);

function sortedTrue() {
  const sortedAnimalNames = (objArray) => objArray.reduce((acc, cur) => {
    acc.push({ [cur.name]: animalNames(cur).sort() }); return acc;
  }, []);
  return {
    NE: sortedAnimalNames(region('NE')),
    NW: sortedAnimalNames(region('NW')),
    SE: sortedAnimalNames(region('SE')),
    SW: sortedAnimalNames(region('SW')),
  };
}
// console.log(Object.keys(includeTrue()));
// console.log(sortedTrue());

function includeAndSorted(param) {
  const { includeNames, sorted } = param;
  if (includeNames && sorted) return sortedTrue();
  if (includeNames) return includeTrue();
}

function filterBySex(param) {
  const { sex } = param;
  const filteredNames = (element) => element.residents.map((animals) => animals)
    .filter((value) => value.sex === sex);
  const filteredAnimalsNames = (objArray) => objArray.reduce((acc, cur, i) => {
    const justFilteredNames = filteredNames(cur).map((value) => value.name);
    console.log(justFilteredNames);
    if (!filteredNames(cur)[i]) return acc;
    acc.push({ [cur.name]: justFilteredNames }); return acc;
  }, []);
  return {
    NE: filteredAnimalsNames(region('NE')),
    NW: filteredAnimalsNames(region('NW')),
    SE: filteredAnimalsNames(region('SE')),
    SW: filteredAnimalsNames(region('SW')),
  };
}
console.log(filterBySex({ sex: 'female' }));

function includeAndSex(param) {
  const { includeNames, sex } = param;
  if (includeNames && sex === 'female') return filterBySex(param);
  if (includeNames && sex === 'male') return filterBySex(param);
}

module.exports = {
  noParam,
  includeTrue,
  sortedTrue,
  includeAndSorted,
  filterBySex,
  includeAndSex,
};
