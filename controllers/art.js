const ArtModel = require('../models/Art.js');

/**
 * ArtController.js
 *
 * @description :: Server-side logic for managing Arts.
 */
module.exports = {

  /**
     * ArtController.list()
     */
  list(req, res) {
    ArtModel.find((err, Arts) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Art.',
          error: err
        });
      }
      return res.json(Arts);
    });
  },

  /**
           * ArtController.show()
           */
  show(req, res) {
    const { id } = req.params;
    ArtModel.findOne({ _id: id }, (err, Art) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Art.',
          error: err
        });
      }
      if (!Art) {
        return res.status(404).json({
          message: 'No such Art'
        });
      }
      return res.json(Art);
    });
  },

  /**
           * ArtController.create()
           */
  create(req, res) {
    const Art = new ArtModel({
      title: req.body.title,
      description: req.body.description,
      contract: req.body.contract,
      imageUri: req.body.imageUri

    });

    Art.save((err, Art) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating Art',
          error: err
        });
      }
      return res.status(201).json(Art);
    });
  },

  /**
           * ArtController.update()
           */
  update(req, res) {
    const { id } = req.params;
    ArtModel.findOne({ _id: id }, (err, Art) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Art',
          error: err
        });
      }
      if (!Art) {
        return res.status(404).json({
          message: 'No such Art'
        });
      }

      Art.title = req.body.title ? req.body.title : Art.title;
      Art.description = req.body.description ? req.body.description : Art.description;
      Art.contract = req.body.contract ? req.body.contract : Art.contract;
      Art.imageUri = req.body.imageUri ? req.body.imageUri : Art.imageUri;

      Art.save((err, Art) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating Art.',
            error: err
          });
        }

        return res.json(Art);
      });
    });
  },

  /**
           * ArtController.remove()
           */
  remove(req, res) {
    const { id } = req.params;
    ArtModel.findByIdAndRemove(id, (err, Art) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the Art.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
