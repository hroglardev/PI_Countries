const router = require('express').Router()
const getCountries = require('../controllers/getCountries')
const getCountryById = require('../controllers/getCountryById')
const getCountryByName = require('../controllers/getCountryByName')

router.get('/name', getCountryByName)
router.get('/', getCountries)
router.get('/:id', getCountryById)

module.exports = router
