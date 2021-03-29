const User = require('../models/User');

const authenticate = require('../auth/auth');

// get All users from DB
const getAll = async (_req, res) => {
  try {
    const users = await User.find({});

    return res.status(200).json(users);

  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};


// get user by its email and password to login
const login = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, ' ', password);

  if (!email || !password) {
    return res.status(400).json({ message: 'Missing entries. Try again.' });
  }

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(404).json({ message: 'Incorrect username or password' });
    }

    // -- create credentials without password, only id username and email
    const { _doc: userData } = user;
    const { password: pass, ...credentials } = userData;
    // --
    
    const token = authenticate(credentials);

    return res.status(200).json({ ...credentials, token });

  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAll,
  login,
};