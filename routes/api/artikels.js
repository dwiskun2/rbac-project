const express = require('express');
const router = express.Router();

// Artikel Model
const Artikel = require('../../models/Artikel');

// @route GET api/artikel
// @desc Get All artikel
// @access Public
router.get('/', (req, res) => {
  Artikel.find()
    .sort({ date: -1 })
    .then(artikels => res.json(artikels))
});

// @route POST api/artikel
// @desc Create A Post untuk Artikel
// @access Public
router.post('/', (req, res) => {
  const newArtikel = new Artikel({
    name: req.body.name,
    artikel: req.body.artikel
  });

  newArtikel.save().then(artikel => res.json(artikel));
});

// @route DELETE api/artikel/:id
// @desc Delete untuk Artikel
// @access Public
router.delete('/:id', (req, res) => {
 Artikel.findById(req.params.id)
  .then(artikel => artikel.remove().then(() => res.json({success: true})))
  .catch(err => res.status(404).json({success: false}));
});


module.exports = router;