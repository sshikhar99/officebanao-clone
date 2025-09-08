const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;
const SECRET_KEY = "supersecretkey"; // you can change this

app.use(cors());
app.use(bodyParser.json());

// Load admin users
const users = JSON.parse(fs.readFileSync("users.json"));

// ✅ Login route
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user) return res.status(400).json({ error: "User not found" });

  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) return res.status(401).json({ error: "Invalid password" });

  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token });
});

// ✅ Submit form
app.post("/api/vendors", (req, res) => {
  const newData = req.body;
  const data = JSON.parse(fs.readFileSync("data.json"));
  data.push(newData);
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
  res.json({ message: "Form submitted successfully" });
});

// ✅ Get submissions (protected route)
app.get("/api/submissions", (req, res) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(403).json({ error: "No token provided" });

  const token = authHeader.split(" ")[1];
  try {
    jwt.verify(token, SECRET_KEY);
    const data = JSON.parse(fs.readFileSync("data.json"));
    res.json(data);
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
