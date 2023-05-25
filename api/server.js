const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const controllerCalculo = require("./controllers/Calc");
const app = express();
const port = 4000;

// middlewares
app.use(bodyParser.json());
app.use(cors());

//routes
app.post("/calcular", controllerCalculo);

// conn
app.listen(port, () => console.log(`server listening on port ${port}`));