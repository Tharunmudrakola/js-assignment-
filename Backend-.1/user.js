import express from "express";
const router = express.Router();

let users = [];

// GET all users
router.get("/", (req, res) => {
  res.json({ message: "all users", payload: users });
});

// POST user
router.post("/", (req, res) => {
  users.push(req.body);
  res.status(201).json({ message: "user created", payload: req.body });
});

// GET user by id
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) return res.status(404).json({ message: "user not found" });

  res.json({ payload: user });
});

// PUT user
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) return res.status(404).json({ message: "user not found" });

  users[index] = { id, ...req.body };
  res.json({ message: "user updated", payload: users[index] });
});

// DELETE user ✅ IMPORTANT
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) return res.status(404).json({ message: "user not found" });

  users.splice(index, 1);
  res.json({ message: "user deleted" });
});

export default router;
