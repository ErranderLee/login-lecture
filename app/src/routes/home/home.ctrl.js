// 라우터의 컨트롤러를 분리
"use strict";

const hello = (req, res) =>{
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login")
}

module.exports = {
    hello,
    login,
};
// object로 빼줌.
// key value 쌍이어야 하는데 key 값만 넣어주면 key에 해당하는 것을 알아서 value로 넣는다.
// { hello : hello, login : login}과 같음.