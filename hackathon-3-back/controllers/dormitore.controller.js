const Dormitore = require('../models/Dormitore.model');

module.exports.dormitoreController = {

    getDormitore: async (req, res) => {
        try {
            const data = await Dormitore.find();
            res.json(data);
        } catch (error) {
            res.json(error);
        }
    },

    createDormitore: async (req, res) => {
        console.log(req)
        try {

            const {
                title,
                description,
                image,
                rating,
            } = req.body;
console.log(title,description,image,rating);
            const data = await Dormitore.create({
                title,
                description,
                image,
                rating,
            });

            res.json(data);

        } catch (error) {
            res.json(error, 'asdfasdqwe');
        }
    }

}