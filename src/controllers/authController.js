const authService = require("../services/authService");
const AppError = require("../utils/AppError");

exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return next(
        new AppError("Iveskite prisijungimo varda ir slaptazodi", 400)
      );
    }
    const token = await authService.login(username, password);
    res.status(200).json({ token });
  } catch (error) {
    console.log("Login klaida", error.message);
    next(new AppError("Neteisingas prisijungimo vardas arba slaptažodis", 401));
  }
};

exports.register = async (req, res, next) => {
  const { username, password, role } = req.body;

  try {
    if (!username || !password || !role) {
      throw new AppError("Iveskite username arba slaptazodi", 400);
    }
    const user = await authService.register(username, password, role);
    res.json(user);
  } catch (error) {
    // if (error.message === "Email already in use") {
    //   throw new AppError("Toks el. paštas jau naudojamas", 400);
    // } else {
    // throw new AppError("Registracijos klaida: " + error.message, 500);
    // }
    next(error);
  }
};
