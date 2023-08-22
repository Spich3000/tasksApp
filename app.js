//
//

const express = require("express");
const app = express();
const tasks = require("./routes/tasks");


// middleware
app.use(express.json());


// Routes
app.get("/", (req, res) => {
    res.send("Task Manager App")
})

app.use("/api/v1/tasks", tasks)



const port = 5050

app.listen(port, console.log(`Server is listening ${port}`));
