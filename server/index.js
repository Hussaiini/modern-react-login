const express = require("express");
const app = express();
const bodyParser = require('body-parser')
 const mysql = require('mysql');
 const cors = require("cors")
// const {createPool} = require('mysql')


// const pool  = createPool({
//     host: 'localhost',
//     user:'root',
//     password: 'root' ,
//     database:'kekedb',
//     connectLimit: 10,
// })

// pool.query(`select * from kekedb.users_tbl `, (err, res)=>{
//     if (err){
//         console.log(err);
//     }
//     return console.log(res)
// }) 

//app.use(express.json());
try{
const db= mysql.createPool({
    host: 'localhost',
    user:'root',
    password: 'root' ,
    database:'kekedb',
});

db.query(`select * from kekedb.users_tbl `, (err, res)=>{
    return console.log(res)
}) 
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.post("/api/insert", (req, res)=>{
    const userId = req.body.userId
    const email = req.body.email
    const sqlInsert =`INSERT INTO kekedb.users_tbl (user_id,email) VALUES (?,? );`
    db.query(sqlInsert,[userId, email], (err,result)=>{
        console.log(err)
        res.send("Record Inserted!")
    })

})}
catch (err){
    console.log(err)
}
// app.get("/", (req, res)=>{
//     const sqlInsert =`INSERT INTO kekedb.users_tbl (user_id, first_name, middle_name, last_name,  tel_no, address, email,password) VALUES ('003', 'Aisha','Lawal','Gambo', '08122224888', 'Wuse II', 'hussaiini@yahoo.com', 'Bond007' );`
//     db.query(sqlInsert, (err,result)=>{
//         res.send("Record Inserted!")
//     })

// })}
// catch (err){
//     console.log(err)
//}
// const sqlInsert ="INSERT INTO users_tbl (user_id, first_name, middle_name, last_name, tel_no, address, email,password) VALUES(001, 'Hussaini','Lawal', 'Gambo', 08060242671, 'hussaiini@yahoo.com', 'ABC123');"

app.listen(3010, ()=>{
    console.log("server running on 3010");
})