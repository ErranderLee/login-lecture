// 라우터의 컨트롤러를 분리
"use strict";

const users = {
    id: ["hoyonglee", "user1", "user2"],
    psword: ["1234", "1234", "123456"],
}
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

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        })
    }
}
module.exports = {
    output,
    process,
};

// object로 빼줌.
// key value 쌍이어야 하는데 key 값만 넣어주면 key에 해당하는 것을 알아서 value로 넣는다.
// { hello : hello, login : login}과 같음.