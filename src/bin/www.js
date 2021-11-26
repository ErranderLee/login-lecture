// 서버 기동 모듈화
"use strict";

const app = require("../app");

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server ON");
});