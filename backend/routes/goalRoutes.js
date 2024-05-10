import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Get Goals",
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    message: "set Goals",
  });
});

router.put("/:id", (req, res) => {
  res.status(200).json({
    message: `Update goal ${req.params.id}`,
  });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({
    message: `${req.params.id} Deleted`,
  });
});

export default router;
