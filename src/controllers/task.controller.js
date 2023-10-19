const pool = require("../models/task.db");

/*const getAllTask = async (req, res) => {
  const result = await pool.query("SELECT * FROM task");
  console.log(result.rows);
  res.send(result.rows);
};

const getSingleTask = async (req, res) => {
  const { id } = req.params;
  const task = await pool.query("SELECT * FROM task WHERE id = $1", [id]);
  if (task.rows.length === 0) {
    return res.status(404).send({
      message: "Task not found",
      success: false,
      task: [],
    });
  }
  res.send({
    message: "Task found",
    success: true,
    task: task.rows,
  });
};
const createTask = async (req, res) => {
  const { title, description } = req.body;
  res.send("tarea creada");

  const newTask = await pool.query(
    "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING id",
    [title, description]
  );

  console.log(newTask);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const updatedTask = await pool.query(
    "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
    [title, description, id]
  );

  if (updatedTask.rows.length === 0) {
    return res.status(404).send({
      message: "Task not found",
      success: false,
      task: [],
    });
  }

  res.send(updatedTask.rows[0]);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  const deletedTask = await pool.query(
    "DELETE FROM task WHERE id = $1 RETURNING *",
    [id]
  );

  if (deletedTask.rows.length === 0) {
    return res.status(404).send({
      message: "Task not found",
      success: false,
      task: [],
    });
  }

  res.send(`Task ${id} deleted successfully`);
};*/

//* ----------------------------------------------------------------
const getAllTask = async (req, res) => {
  const result = await pool.query("SELECT * FROM task");
  console.log(result.rows);
  res.send(result.rows);
};

const getSingleTask = async (req, res) => {
  const { id } = req.params;
  res.send("get single task");
};
const createTask = async (req, res) => {
  const { title, description } = req.body;
  res.send("tarea creada");

  const newTask = await pool.query(
    "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING id",
    [title, description]
  );

  res.send(newTask);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  // res.send(updatedTask.rows[0]);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  // res.send(`Task ${id} deleted successfully`);
};

//* exports

module.exports = {
  getAllTask,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
