const path = require("path");

module.exports = function(app) {
    //this will set up the workout to continue or start a new one when the button is clicked from index.html
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });

    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};