const express = require('express')
const todoController = require('../controllers/todos')

const router = express.Router()


router.get('/', todoController.getAll)
router.post('/', todoController.create)

module.exports = router