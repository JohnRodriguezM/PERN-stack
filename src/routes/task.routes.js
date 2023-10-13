const { Router } = require("express");

const router = Router();

router.get("/api/task", (req, res) => {
  res.send("get task");
});

router.get("/api/task/:id", (req, res) => {
  const { id } = req.params;

  res.send(`get task ${id}`);
});

router.post("/api/task", (req, res) => {
  res.send("create task");
});

router.put("/api/task/:id", (req, res) => {
  const { id } = req.params;

  res.send(`update task ${id}`);
});

router.delete("/api/task/:id", (req, res) => {
  const { id } = req.params;

  res.send(`delete task ${id}`);
});

module.exports = router;
