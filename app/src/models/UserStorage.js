"use strict";

const { json } = require("body-parser");
const fs = require("fs").promises;
// .promises를 붙임으로써 promise 객체를 반환함.

class UserStorage {
    // static #users = {
    //     id: ["hoyonglee", "user1", "user2"],
    //     psword: ["1234", "1234", "123456"],
    //     name: ["이호용", "유저1", "유저2"]
    // }; // 클래스 내에 변수 선언할 때 const 필요없음.
    //    // static : class를 인스턴스화 시키지 않고 변수를 불러올 수 있음.
    //    // # : public 변수를 private으로 바꾼다 -> 은닉화
    
    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    } // static 변수를 return 하므로 static으로 만든다.
      // static으로 선언했으므로 클래스를 인스턴스화 하지 않아도 쓸 수 있다.
    static getUserInfo(id) {
        return fs.readFile("./src/databases/hoyonglee/users.json") // promise 객체를 반환
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch((err) => console.log)
    }

    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // => {id, psword, name}
        // users의 key값을 list로 만든다.
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            // newUser에 key(info)에 따른 값이 순차적으로 들어간다.
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        console.log(users);
        // console.log(this.#users);
        return { success: true };
    }
}

module.exports = UserStorage;