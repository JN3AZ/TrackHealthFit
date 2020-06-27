const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log("App running on PORT" + PORT);
});