const mysql = require("mysql");
const express = require('express');
const app = express()

var config = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "HorizonEvents"
})

function add_user() {
    let name = document.querySelector("#nome")
    let username = document.querySelector("#username")
    let email = document.querySelector("#email")
    let telefone = document.querySelector("#telefone")
    let senha = document.querySelector("#senha")
    let confirme_senha = document.querySelector("#confirme_senha")

    if(senha == confirme_senha){
        config.connect(function (err) {
            if (err) throw err;
            console.log("foi");
            var sql = `INSERT INTO Usuario_Cliente(Nome,User_Name,Email,Telefone,Senha) VALUES ?`;
            values = [
                [`${name}`, `${username}`, `${email}`, `${telefone}`, `${senha}`]
            ]
            config.query(sql, [values], function (err, result) {
                if (err) throw err;
                console.log("cadastrado");
            })
        });
        window.location.href = "view/areaDoUsuario.html";
    }
    else{
        alert("Senha não bate burro")
    }
}

var confirm = document.querySelector("#confirm")

confirm.addEventListener("click",add_user())