const User = require('../models/User');

// get All users from DB
const getAll = async (_req, res) => {
  try {
    const users = await User.find({});

    return res.status(200).json(users);

  } catch (err) {
    return res.status(400).send('Error ', err);
  }
};


// get user by its email and password to login
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Missing entries. Try again.' });
  }

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(404).json({ message: 'Incorrect username or password' });
    }

    return res.status(200).json(user);

  } catch (err) {
    return res.status(400).send('Error ', err);
  }
};

module.exports = {
  getAll,
  login,
};