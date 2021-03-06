"use strict";


const id  = document.querySelector("#id");
const name = document.querySelector("#name");
const psword = document.querySelector("#psword");
const confirmPsword = document.querySelector("#confirm-psword");
const registerBtn = document.querySelector("#button");

// #은 id로 부여되어 있는 값을 가져오라는 것을 의미.

registerBtn.addEventListener("click", register);
// Click 이벤트 발생 시 콜백함수(register) 실행

function register() {
    if (!id.value) return alert("아이디를 입력해주세요.");
    if (confirmPsword.value !== psword.value) return alert("비밀번호가 일치하지 않습니다.");
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
    };
    
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success) {
                location.href = "/login";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("로그인 중 에러 발생");
        });
};