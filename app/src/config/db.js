const maria = require("mysql");

const db = maria.createConnection({
    host: "socialloginpractice.cxx37clovtid.ap-northeast-2.rds.amazonaws.com",
    user: "hoyonglee",
    password: "ajoulee1214",
    database: "login_lecture",
});

db.connect();

module.exports = db;