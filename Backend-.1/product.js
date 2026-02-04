import express from "express";
const router = express.Router();

let products = [];

// GET all products
router.get("/", (req, res) => {
  res.json({ message: "all products", payload: products });
});

// POST product
router.post("/", (req, res) => {
  products.push(req.body);
  res.status(201).json({ message: "product created", payload: req.body });
});

// GET product by id
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.productid === id);

  if (!product) return res.status(404).json({ message: "product not found" });

  res.json({ payload: product });
});

// PUT product
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.productid === id);

  if (index === -1) return res.status(404).json({ message: "product not found" });

  products[index] = { productid: id, ...req.body };
  res.json({ message: "product updated", payload: products[index] });
});

// DELETE product
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.productid === id);

  if (index === -1) return res.status(404).json({ message: "product not found" });

  products.splice(index, 1);
  res.json({ message: "product deleted" });
});

export default router;
