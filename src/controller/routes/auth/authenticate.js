const jwt = require('jsonwebtoken');
const User = require('../../../domain/db/schemas/user');
const app = require('../../app/app');
const bcrypt = require('bcrypt');

const errorResp = {
  success: false,
  message: 'Authentication failed.'
};

const passwMatches = (passw1, hash) => bcrypt.compareSync(passw1, hash);

const generateToken = paramsForTokenGeneration => {
  const secretKey = app.get('superSecret');

  return jwt.sign(paramsForTokenGeneration, secretKey, {
    expiresIn: 60 * 60 * 24
  });
};

const authenticate = (req, res) => {
  const { username, email, password } = req.body;

  const userId = username ? { username: username } : { email: email };

  User.findOne(userId, onFind);

  function onFind(err, user) {
    if (err) throw err;

    if (!user) {
      res.json(errorResp);
      return;
    }
    const correctPassword = passwMatches(password, user.password);

    if (!correctPassword) {
      res.json(errorResp);
      return;
    }

    const { _id: id } = user;

    const payload = {
      password,
      id
    };

    const token = generateToken(payload);

    res.json({
      success: true,
      message: 'Enjoy your token!',
      token: token
    });
  }
};

module.exports = authenticate;
