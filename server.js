const express = require("express")
const cors = require("cors");
const app = express()

app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {
    res.send("Hello world Mr. Pong");
})

const port = 3001
app.listen(port, () => console.log(`app is runningn on port ${port}`))