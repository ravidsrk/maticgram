var express = require('express');
var router = express.Router();
var ArtController = require('../controllers/ArtController.js');

/*
 * GET
 */
router.get('/', ArtController.list);

/*
 * GET
 */
router.get('/:id', ArtController.show);

/*
 * POST
 */
router.post('/', ArtController.create);

/*
 * PUT
 */
router.put('/:id', ArtController.update);

/*
 * DELETE
 */
router.delete('/:id', ArtController.remove);

module.exports = router;
