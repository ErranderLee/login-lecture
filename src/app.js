// const http = require("http"); // 내장 모듈이라 다운 받을 필요 없음.
// const app = http.createServer((req, res) => {
//     console.log(req.url); // url이 콘솔에 찍힌다.
//     // url을 파싱해서 맵핑할 수 있다.
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
//     // utf-8로 해석해달라고 응답.
//     if (req.url === "/") {
//         res.end("여기는 루트 입니다.");
//     } else if (req.url === "/login") {
//         res.end("여기는 로그인 페이지 입니다.");
//     }
//     // http로 한글을 입력하면 브라우저에서 깨진다.
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.");
// }); // 브라우저가 기다리고 있으면 서버는 열렸으나 루트를 찾지 못한 것.

"use strict";

// express를 사용한 서버
// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./routes/home"); // 해당 디렉토리의 index.js를 읽어줌.

//앱 세팅
app.set("views", "./views"); //views를 관리할 폴더를 지정.
app.set("view engine", "ejs"); // html을 어떤 엔진으로 해석할 것인지 지정.
app.use("/", home); // use : 미들웨어를 등록해주는 메서드.
// /으로 오면 home으로 이동해서 index.js를 읽어 라우팅된다.

module.exports = app; // 서버 기동 모듈화를 위한 내보내기
