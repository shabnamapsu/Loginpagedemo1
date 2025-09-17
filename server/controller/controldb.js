import User from "../Schemamodel/dbSchema.js";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: "User saved successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
