const { Router } = require("express");


const {
  getAllTask,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

const router = Router();

router.get("/api/task", getAllTask);
router.get("/api/task/:id", getSingleTask);
router.post("/api/task", createTask);
router.put("/api/task/:id", updateTask);
router.delete("/api/task/:id", deleteTask);

module.exports = router;
