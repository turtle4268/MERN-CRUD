var express = require('express'),
    create  = require('../controllers/create'),
    get    = require('../controllers/get'),
    edit  = require('../controllers/edit'),
    del     = require('../controllers/del'),
    router  = express.Router();


router.route('/form')
  .post(create)
  .get(get);
router.route('/form/:id')
  .put(edit)
  .delete(del);

module.exports = router;
