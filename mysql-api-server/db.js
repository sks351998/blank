const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    database:'mytestdb',
    user:'myuser',
    password:'mypass'
})

function getAllUser(){
    return new Promise(function(resolve,reject){
        connection.query(
            `SELECT * FROM persons`,
            function(err,rows,colm){
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
            }
        )
    })
}

function addNewUser(name,age,city){
    return new Promise(function(resolve,reject){
        connection.query(
            `INSERT INTO persons(name,age,city) VALUES(?,?,?)`,
            [name,age,city],
            function(err,result){
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }

            }
        )
    })
}

 module.exports ={
    getAllUser,
    addNewUser
}
    
 