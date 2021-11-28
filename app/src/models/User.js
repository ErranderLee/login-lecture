"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const { id, psword } = UserStorage.getUserInfo(this.body.id);
        
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