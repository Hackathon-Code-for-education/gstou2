const University = require("../models/University.model");

module.exports.universityController = {
  registerUniversity: async (req, res) => {
    try {
      const {
        name,
        email,
        siteUrl,
        news,
        institute,
        dormitory,
        docsImg,
        selectionCommittee,
        reviews,
      } = req.body;

      const photo = [];

      if (req.files && req.files.length > 0) {
        for (let i = 0; i < req.files.length; i++) {
          const photoPath = req.files[i].path;
          photo.push(photoPath);
        }
      }

      const university = await University.create({
        name,
        image: photo,
        email,
        siteUrl,
        news,
        institute,
        dormitory,
        docsImg,
        selectionCommittee,
        reviews,
      });

      res.json(university);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getUniversity: async (req, res) => {
    try {
      const universities = await University.find().populate(
        "news institute dormitory"
      );

      res.json(universities);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  patchUniversity: async (req, res) => {
    try {
      const {
        name,
        email,
        siteUrl,
        news,
        institute,
        dormitory,
        docsImg,
        selectionCommittee,
        reviews,
      } = req.body;

      const photo = [];

      if (req.files && req.files.length > 0) {
        for (let i = 0; i < req.files.length; i++) {
          const photoPath = req.files[i].path;
          photo.push(photoPath);
        }
      }

      const updatedUniversity = await University.findByIdAndUpdate(
        req.params.id,
        {
          name,
          image: photo,
          email,
          siteUrl,
          news,
          institute,
          dormitory,
          docsImg,
          selectionCommittee,
          reviews,
        },
        { new: true }
      ).populate("news institute dormitory");

      if (!updatedUniversity) {
        return res.status(404).json({ error: "University not found" });
      }

      res.json(updatedUniversity);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
