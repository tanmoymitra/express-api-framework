var express = require("express")
var router = express.Router();
var dbAccess = require('../middlewares/dbConn')
var auth = require('../middlewares/authorize.js')


router.post('/api/v1/validate', require('../controllers/validate'))
router.get('/api/v1', auth, require('../controllers/commonCtrl').all)

module.exports = router
