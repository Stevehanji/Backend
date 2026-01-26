const express = require("express");
const app = express();
const port = 8192;

app.get("/", (req, res) => {
    return res.send("Hello world");
});

app.listen(port, () => {
    console.log(`Example app listening at localhost:${port}`)
})