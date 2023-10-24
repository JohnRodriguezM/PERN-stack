const express = require("express");
const morgan = require("morgan");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");

//* local imports
const taskRouter = require("./routes/task.routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//* routes definition

app.use("/", taskRouter);

app.use((err, req, res, next) => {
  console.error(err);

  const errorId = uuidv4(); // Generar un ID de seguimiento de errores único
  const errorMessage =
    "Ha ocurrido un error en el servidor. Por favor, inténtelo de nuevo más tarde o póngase en contacto con el soporte técnico si el problema persiste.";
  const errorDetails = process.env.NODE_ENV === "production" ? null : err.stack; // Proporcionar detalles de seguimiento de errores solo en entornos de desarrollo

  const statusCode = err.statusCode || 500; // Usar el código de estado de respuesta proporcionado por el error, o 500 si no se proporciona

  res.status(statusCode).json({
    errorId,
    errorMessage,
    errorDetails,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
