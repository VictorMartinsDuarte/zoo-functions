const data = require('./data');
const { species, employees, prices } = require('./data');

// *-- 1 --*
function getSpeciesByIds(...ids) {
  return species.filter((element, index) => element.id === ids[index]);
}
// *-- 2 --*
function getAnimalsOlderThan(animal, age) {
  const animalObject = species.find((obj) => obj.name === animal);
  return animalObject.residents.every((element) => element.age >= age);
}
// *-- 3 --*
function getEmployeeByName(employeeName) {
  return employees.reduce((acc, current) => {
    if (current.firstName === employeeName || current.lastName === employeeName) {
      return current;
    }
    return acc;
  }, {});
}
// *-- 4 --*
function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}
// *-- 5 --*
function isManager(id) {
  const managersId = employees.map(({ managers }) => managers).reduce((acc, current) => {
    acc.push(...current);
    return acc;
  });
  const managersFiltered = managersId.filter((element, i) => managersId.indexOf(element) === i);
  // Referência filter + indexOf = https://www.horadecodar.com.br/2020/08/15/remover-elementos-repetidos-de-um-vetor-em-javascript-repetidos-array/
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

  return managersFiltered.some((element) => element === id);
}
// *-- 6 --*
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  if (!id || !firstName || !lastName) return 'Preencha os parâmetros';

  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  return employees.push(newEmployee);
}
// *-- 7 --*
function countAnimals(speciesName) {
  if (!speciesName) {
    return species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  return species.find(({ name }) => name === speciesName).residents.length;
}
// *-- 8 --*
function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length < 1) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const sumPrices = (Adult * prices.Adult) + (Senior * prices.Senior)
    + (Child * prices.Child);

  return sumPrices;
}
// *-- 9 --*
function getAnimalMap(options) {
  // seu código aqui
}
// *-- 10 --*
function getSchedule(dayName) {
  // seu código aqui
}
// *-- 11 --*
function getOldestFromFirstSpecies(id) {
  // seu código aqui
}
// *-- 12 --*
function increasePrices(percentage) {
  // seu código aqui
}
// *-- 13 --*
function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
