const data = require('./data');
const { species, employees, prices, hours } = require('./data');
const { employeesInfo } = require('./getEmployeeCoverage');
const { noParam, dynamic } = require('./getAnimalMap.js');

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
  // return employees.some((element) => [...element.managers].includes(id));
  // Alternativa de código pelo Kelner R.
}
// *-- 6 --*
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  if (!id || !firstName || !lastName) return 'Preencha os parâmetros';

  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
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
  if (!entrants) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const sumPrices = (Adult * prices.Adult) + (Senior * prices.Senior)
    + (Child * prices.Child);

  return sumPrices;
}
// *-- 9 --*
// Resolução desenvolvida junto com o Luiz Gustavo 14B
function getAnimalMap(options) {
  if (!options) return noParam();
  const { includeNames, sex, sorted } = options;
  if (includeNames) return dynamic(sorted, sex);
  if (!includeNames) return noParam();
}
//   switch (options) {
//   case includeNames:
//     includeTrue();
//     break;
//   default:
//     break;
// }
// *-- 10 --*
function getSchedule(dayName) {
  if (!dayName) {
    const days = Object.keys(hours);

    return days.reduce((acc, current) => {
      acc[current] = `Open from ${hours[current].open}am until ${hours[current].close - 12}pm`;
      if (current === 'Monday') {
        acc[current] = 'CLOSED';
      }
      return acc;
    }, {});
  }
  if (dayName === 'Monday') return { [dayName]: 'CLOSED' };

  return { [dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm` };
}
// *-- 11 --*
function getOldestFromFirstSpecies(id) {
  const managedAnimals = employees.find((employee) => employee.id === id).responsibleFor;
  const animalSpecie = species.find((animal) => animal.id === managedAnimals[0]);
  const oldestToYoungestAnimal = animalSpecie.residents.sort((a, b) => b.age - a.age);
  const { name, sex, age } = oldestToYoungestAnimal[0];
  return [name, sex, age];
}
// *-- 12 --*
function increasePrices(percentage) {
  const percent = (percentage / 100) + 1;
  const { Adult, Senior, Child } = prices;
  prices.Adult = Math.round((Adult * percent) * 100) / 100;
  prices.Senior = Math.round((Senior * percent) * 100) / 100;
  prices.Child = Math.round((Child * percent) * 100) / 100;
}
// *-- 13 --*
function getEmployeeCoverage(idOrName) {
  if (!idOrName) return employeesInfo(employees);

  const empName = employees.filter(({ id = 0, firstName = 0, lastName = 0 }) =>
    id === idOrName || firstName === idOrName || lastName === idOrName);
  return employeesInfo(empName);
} // Final da resolução feita com ajuda do Luiz G.

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
