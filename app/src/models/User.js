"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        // console.log(await UserStorage.getUserInfo(this.body.id));
        // Promise { <pending> }으로 출력이 되는데 pending은 데이터를 다 읽지 못했다는 뜻.
        // Promise가 비동기적으로 동작하기 때문에 데이터를 모두 읽기 전에 출력되서 undefined가 출력된다. 
        // 따라서 기다리라는 것을 명시해야 하는데 그것이 await이다. Promise를 반환하는 것에만 적용할 수 있다.
        // await는 async 함수 안에서만 쓸 수 있다.
        const {id, psword} = await UserStorage.getUserInfo(this.body.id);
        // 이 login 함수를 실행하는 것에도 async, await을 걸어줘야 한다.
        if (id) {
            if (id === this.body.id && psword === this.body.psword) {
                return { success: true };
            }
            else {
                return { success: false, msg:"비밀번호가 틀렸습니다. "};
            }
        }
        return { success: false, msg:"존재하지 않는 아이디 입니다. "};
    }

    register() {
        const response = UserStorage.save(this.body);
        return response;
    }
}

module.exports = User;