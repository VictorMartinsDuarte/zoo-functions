const data = require('./data');
const { species } = require('./data');

function employeesInfo(arr) {
  return arr.reduce((acc, personObj) => {
    const { firstName, lastName, responsibleFor } = personObj;
    const animals = responsibleFor.reduce((acum, animalId) => {
      acum.push(species.find((animalObj) => animalObj.id === animalId).name);
      return acum;
    }, []);
    acc[`${firstName} ${lastName}`] = animals;
    return acc;
  }, {});
}

module.exports = {
  employeesInfo,
};
