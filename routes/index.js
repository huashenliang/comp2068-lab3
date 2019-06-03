var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const persons = [{
  path: 'huashen',
  name: 'huashen',
  cityResisding: 'Barrie', 
  job: 'student', 
  countryBorn: 'China'
}, {
  path: 'susan',
  name: 'susan',
  cityResisding: 'Barrie', 
  job: 'Desinger', 
  countryBorn: 'China', 
  relation: 'sister'
}, {
  path: 'shunming',
  name: 'shunming',
  cityResisding: 'Zhongshan', 
  job: 'Businessman', 
  countryBorn: 'China', 
  relation: 'father'
}, {
  path: 'liqun',
  name: 'liqun',
  cityResisding: 'Zhongshan', 
  job: 'housewife', 
  countryBorn: 'China', 
  relation: 'mother'
}]

router.get('/:name', (req, res, next) => {
  const name = req.params.name;
  //find the name in persons array, return the object to person
  //where person.path is equal to name
  const person = persons.find(per => per.path === name);
  
  //if no person, generate error and pass to next function
  if (!person) {
    return next(new Error("Person does not exist"));
  }
  
  //Pass found person to the person view
  res.render('person', person);
});

module.exports = router;
