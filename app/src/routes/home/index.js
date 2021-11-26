"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl") // 컨트롤러를 받는다.

router.get("/", ctrl.hello);

router.get("/login", ctrl.login);

module.exports = router; // 라우터를 외부에서 사용할 수 있도록 내보내기.