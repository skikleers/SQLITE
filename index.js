const express = require("express")
const routerTask = require("./router/routerTask")

const app = express()

// verwijder de cross foutmelding
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.use(express.json())
app.use("/api/task", routerTask)

app.listen(3000, () => console.log('server active'))
