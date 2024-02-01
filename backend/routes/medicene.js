const express = require('express');
const { addMedice, getAllMedicine, updateMedicine } = require('../controller.js/medicineController');

const router = express.Router();

router.post('/medicine', addMedice)
router.get('/medicine', getAllMedicine)
router.put('/medicine/:id', updateMedicine)

module.exports = router;