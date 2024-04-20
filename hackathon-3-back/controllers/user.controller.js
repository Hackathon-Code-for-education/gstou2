const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.userController = {
  registerUser: async (req, res) => {
    const { name, login, password } = req.body;

    const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));

    const user = await User.create({ name, login, password: hash });

    res.json(user);
  },

  login: async (req, res) => {
    const { login, password } = req.body;

    const candidate = await User.findOne({ login });

    if (!candidate) {
      return res.status(401).json("Неверный логин");
    }

    const valid = await bcrypt.compare(password, candidate.password);

    if (!valid) {
      return res.status(401).json("Неверный пароль");
    }

    const payload = {
      id: candidate._id,
      login: candidate.login,
    };

    const candidateLogin = candidate._id;

    const token = await jwt.sign(payload, `${process.env.SECRET_JWT_KEY}`, {
      expiresIn: "7d",
    });

    return res.json({ token, login: candidateLogin });
  },

  getUser: async (req, res) => {
    const data = await User.findOne();
    res.json(data);
  },
};
