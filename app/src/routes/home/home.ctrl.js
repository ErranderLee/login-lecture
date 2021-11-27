// 라우터의 컨트롤러를 분리
"use strict";

const UserStorage = require("../../models/UserStorage");
const output = {
    home: (req, res) =>{
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login")
    }
}

const process = {
    login: (req, res) => {
        const {
            id,
            psword
        } = req.body;
        
        const users = UserStorage.getUsers("id", "psword");
        const response = {}
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword) {
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하셨습니다.";
        return res.json(response);
    },
}
module.exports = {
    output,
    process,
};

// object로 빼줌.
// key value 쌍이어야 하는데 key 값만 넣어주면 key에 해당하는 것을 알아서 value로 넣는다.
// { hello : hello, login : login}과 같음.