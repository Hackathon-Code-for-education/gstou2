const University = require("../models/University.model");

module.exports.universityController = {
  registerUniversity: async (req, res) => {
    try {
      const {
        name,
        Image,
        email,
        siteUrl,
        news,
        institute,
        dormitory,
        docsImg,
        selectionCommittee,
      } = req.body;

      const university = await University.create({
        name,
        Image,
        email,
        siteUrl,
        news,
        institute,
        dormitory,
        docsImg,
        selectionCommittee,
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
        Image,
        email,
        siteUrl,
        news,
        institute,
        dormitory,
        docsImg,
        selectionCommittee,
      } = req.body;

      const updatedUniversity = await University.findByIdAndUpdate(
        req.params.id,
        {
          name,
          Image,
          email,
          siteUrl,
          news,
          institute,
          dormitory,
          docsImg,
          selectionCommittee,
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
