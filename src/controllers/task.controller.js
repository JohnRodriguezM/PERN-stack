const pool = require("../models/task.db");

const getAllTask = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM task");
    if (result.length !== 0) {
      return res.json({
        success: true,
        detail: `Se han encontrado ${result.rows} tareas`,
        data: result.rows,
      });
    }

    res.status(404).json({
      data: [],
      success: false,
      detail: `No se han encontrado tareas`,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await pool.query("SELECT * FROM task WHERE id = $1", [id]);
    if (task.rows.length === 0) {
      return res.status(404).json({
        message: "Task not found",
        success: false,
        task: [],
      });
    }
    res.json({
      message: "Task found",
      success: true,
      task: task.rows,
    });
  } catch (err) {
    next(err);
  }
};

const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const newTask = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING id",
      [title, description]
    );

    res.status(201).json({
      success: true,
      detail: `Tarea creada con ID ${newTask.rows[0].id}`,
    });
  } catch (err) {
    next(err);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updatedTask = await pool.query(
      "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
      [title, description, id]
    );

    if (updatedTask.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
        task: [],
      });
    }

    res.json({
      success: true,
      message: `Task ${id} updated successfully`,
      task: updatedTask.rows[0],
    });
  } catch (err) {
    next(err);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedTask = await pool.query(
      "DELETE FROM task WHERE id = $1 RETURNING *",
      [id]
    );

    if (deletedTask.rows.length === 0) {
      return res.status(404).send({
        message: "Task not found",
        success: false,
      });
    }

    res.json({
      message: "Task deleted",
      success: true,
      taskDeleted: deletedTask.rows[0],
    });
  } catch (err) {
    next(err);
  }
};

//* ----------------------------------------------------------------
/*const getAllTask = async (req, res) => {
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
  res.send('borrando tarea')
};
*/
//* exports

module.exports = {
  getAllTask,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
