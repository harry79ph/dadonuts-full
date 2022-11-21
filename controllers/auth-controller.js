require("dotenv").config();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.TOKEN_SECRET;

const expiresIn = 60 * 60 * 24;
const createToken = (id) => jwt.sign({ id }, SECRET, { expiresIn });
const createUserData = ({ dataValues: { firstname, email, street1, street2, city, postcode, phone } }) => {
  return { user: firstname, email, street1, street2, city, postcode, phone };
}

const checkUser = (req, res) => {
  const token = req.cookies["dadonuts-token"];
  if (!token) return res.json({ msg: "User not authorised" });
  jwt.verify(token, SECRET, async (err, decodedToken) => {
    if (err) {
      res.json({ msg: err.message });
    } else {
      try {
        const user = await User.findOne({ where: { uid: decodedToken.id} });
        if (user) {
          const userData = createUserData(user);
          res.json(userData);
        } else {
          res.json({ msg: "No user found" });
        }
      } catch (error) {
        console.log(error);
        res.json({ msg: "Error finding that user" });
      }
    }
  });
};

const signup = async (req, res) => {
  const { email, password } = req.body;

  const users = await User.findAll();
  const exists = users.find(user => user.email === email);
  if (exists) return res.status(422).json({ errors: [{ msg: "This email already exists" }] });

  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await User.create({ ...req.body, password: hashedPassword });
    res.json({ msg: "Registration successful!" });
  } catch (err) {
    console.log(err);
    res.json({ msg: "Database error" });
  }
}

const login = async (req, res) => {
  const { email: reqEmail, password } = req.body;

  const users = await User.findAll();
  const user = users.find((user) => user.email === reqEmail);
  if (!user) return res.status(422).json({ errors: [{ msg: "Incorrect username or password" }] });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(422).json({ errors: [{ msg: "Incorrect username or password" }] });
  
  const token = createToken(user.dataValues.uid);
  res.cookie("dadonuts-token", token, {
    maxAge: expiresIn * 1000,
    httpOnly: true,
    secure: true
  });

  const userData = createUserData(user);
  res.json(userData);
}

const updateUser = async (req, res) => {
  const { email, ...details } = req.body;
  const user = await User.findOne({ where: { email } });
  
  const prev = JSON.stringify(user.dataValues);
  if (!user) return res.status(422).json({ errors: [{ msg: "User not found" }] });
  user.set(details);
  await user.save();
  const curr = JSON.stringify(user.dataValues);

  if (prev === curr) {
    res.json({ msg: "You entered same details!" });
  } else {
    res.json({ msg: "Contact details saved successfully!" });
  }
}

const logout = (req, res) => {
  const token = req.cookies["dadonuts-token"];
  if (!token) return res.sendStatus(204);
  res.clearCookie("dadonuts-token", { httpOnly: true, secure: true, sameSite: "none" });
  res.json({ msg: "Cookie cleared" });
}

module.exports = {
  checkUser,
  signup,
  login,
  updateUser,
  logout
}