module.exports = function(app, path, db) {
    //this will set up the workout to continue or start a new one when the button is clicked from index.html
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(_dirname, "../public/exercise.html"));
    });
    
    app.get("/stats", function(req, res) {
        res.sendFile(path.join(_dirname, "../public/stats.html"));
    });
};