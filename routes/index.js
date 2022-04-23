const express = require('express');
const router = express.Router();


const homeController = require('../controllers/home');
const metaController = require('../controllers/meta');
const dnsController = require('../controllers/dns');

router.get('/',homeController.home);
router.get('/meta', metaController.meta);
router.post('/meta/get-metatag-content', metaController.getMetaTagContent);
router.get('/dns', dnsController.dns);



module.exports = router;