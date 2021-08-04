const data = require('./data');
const { species, employees } = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((element, index) => element.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const animalObject = species.find((obj) => obj.name === animal);
  return animalObject.residents.every((element) => element.age >= age);
}

function getEmployeeByName(employeeName) {
  return employees.reduce((acc, current) => {
    if (current.firstName === employeeName || current.lastName === employeeName) {
      return current;
    }
    return acc;
  }, {});
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(speciesName) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

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
