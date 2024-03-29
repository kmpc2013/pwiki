const app = require("./app");
const appPort = 3333;
require("dotenv").config();
const SRV_PORT = process.env.SRV_PORT || 3000;

app.listen(SRV_PORT, () => console.log(`  -> App running on: http://localhost:${SRV_PORT}/`));

app.get("/", (req, res) => res.status(200).send(`API is working`));
