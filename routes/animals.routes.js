const express = require('express');
const router = express.Router();
const animalsController = require('../controllers/animals.controller');

router.get('/create', animalsController.create);
router.post('/create',animalsController.doCreate);
router.get('/list',animalsController.list);


module.exports = router;