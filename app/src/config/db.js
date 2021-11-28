const maria = require("mysql");

const db = maria.createConnection({
    host: "",
    user: "",
    password: "",
    database: "login_lecture",
});

db.connect();

module.exports = db;
