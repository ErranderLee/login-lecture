"use strict";

const id  = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");
// #은 id로 부여되어 있는 값을 가져오라는 것을 의미.

loginBtn.addEventListener("click", login);
// Click 이벤트 발생 시 콜백함수(login) 실행

function login() {
    const req = {
        id: id.value,
        psword: psword.value
    };
    console.log(req);
};