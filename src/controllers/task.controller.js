const pool = require("../models/task.db");

const getAllTask = async (req, res) => {
  /* const result = await pool.query("SELECT NOW()");
   console.log(result.rows[0].now) */
  res.send("list of tasks");
};

const getSingleTask = async (req, res) => {
  const { id } = req.params;

  res.send(`get task ${id}`);
};

const createTask = async (req, res) => {
  const { title, description } = req.body;
  res.send('tarea creada');

 const newTask = await pool.query(
    "INSERT INTO task (title, description) VALUES ($1, $2)",
    [title, description]
  );

  console.log(newTask )

};

const updateTask = async (req, res) => {
  const { id } = req.params;

  res.send(`update task ${id}`);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  res.send(`delete task ${id}`);
};

//* exports

module.exports = {
  getAllTask,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
