// 서버 기동 모듈화
// 서버 기동 모듈을 이 파일로 옮겼으므로 node ./bin/www.js로 기동시킨다.
"use strict";

const app = require("../app");

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server ON");
});