const express = require("express");
const morgan = require("morgan");

//* local imports
const taskRouter = require("./routes/task.routes");

const app = express();

app.use(morgan("dev"));

//* routes definition

app.use("/", taskRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
