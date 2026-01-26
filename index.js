const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 8192;

app.use(morgan("combined"));

app.get("/", (req, res) => {
    return res.send("Hello world");
});

app.get("/tin-tuc", (req, res) => {
    res.send("Hello world");
})

app.listen(port, () => {
    console.log(`Example app listening at localhost:${port}`)
})