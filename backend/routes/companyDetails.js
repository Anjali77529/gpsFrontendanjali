const express = require('express');
const { create ,  getAllData , 
    getDataById , update , deleteData 
} = require('../controllers/companyDetailsController.js');
const router = express.Router();

router
    .post('/',create)
    .get('/',getAllData)
    .get('/:id',getDataById)
    .put('/:id',update)
    .delete('/:id',deleteData)

module.exports = router