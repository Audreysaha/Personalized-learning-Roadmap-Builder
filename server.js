const express = require("express");
const morgan = require("morgan");

//const cors = require("cors");

require("dotenv").config();
require("./dbConnect");

//const roadmapRoutes = require("./routes/roadmapRoutes");
//const reminderRoutes = require("./routes/reminderRoutes");
//const shareRoutes = require("./routes/shareRoutes");

const app = express();
app.set('views', './views');
app.set('views engine', './ejs');



// Middleware
app.use(express.static('public'));
app.use(morgan("dev"));

app.set("views", "./views");
app.set("view engine", "ejs");

// Routes
//app.use("/api/roadmaps", roadmapRoutes);
//app.use("/api/reminders", reminderRoutes);
//app.use("/api/share", shareRoutes);

// Root Route
app.get("/", (req, res) => {
    res.render('server' , { message: 'Personalized Learning Roadmap API is running!'});
});

// Start Server
const PORT = 3000; 

app.listen(3000, () => {
    console.log('Server running on port 3000');
});