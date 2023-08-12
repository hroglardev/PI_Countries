const router = require('express').Router()
const postActivity = require('../controllers/postActivity')
const getActivities = require('../controllers/getActivities')

router.post('/', postActivity)
router.get('/', getActivities)

module.exports = router
