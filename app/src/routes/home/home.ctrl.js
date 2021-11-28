// 라우터의 컨트롤러를 분리
"use strict";

const User = require("../../models/User");
const output = {
    home: (req, res) =>{
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },

    register: (req, res) => {
        res.render("home/register");
    }
}

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },

    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    }
}
module.exports = {
    output,
    process,
};

// object로 빼줌.
// key value 쌍이어야 하는데 key 값만 넣어주면 key에 해당하는 것을 알아서 value로 넣는다.
// { hello : hello, login : login}과 같음.