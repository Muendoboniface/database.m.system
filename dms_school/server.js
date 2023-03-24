const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(express.static("views"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine" , "ejs");
let data = [];
const mariadb = require('mariadb');
const pool = mariadb.createPool({host: 'localhost', user: 'root',database: 'students_information', connectionLimit: 5});
getData();
function getData(){
pool.getConnection()
  .then(conn => {
    conn.query("SELECT * from students_records")
      .then((rows) => {
       data = JSON.parse(JSON.stringify(rows));
        conn.end();
      })
      .catch(err => {
        console.error(err);
        conn.end();
      });
  })
  .catch(err => {
    console.error(err);
  });
}
  app.get("/",function(req,res){
    getData();
    res.render("index",({data : data}));
  })
  app.listen(9001)
 app.post('/del',function(req,res){
  let {dataIns} = `req.boETE FROM students_records WHERE ADM_NUMBER = "${dataIns}"`;
 })
 app.post('/edit',function(req,res){
  let {dataIns} = req.body;
  pool.query(`UPDATE students_records SET STUDENTSNAME = "${dataIns.name}",YEAROFSTUDY = "${dataIns.year}",PROGRAM = "${dataIns.program}",EMAIL_ADDRESS = "${dataIns.email}"  WHERE ADM_NUMBER = "${dataIns.adm}"`);
  getData()
 })
 app.post('/add',function(req,res){
  let {dataIns} = req.body;
  pool.query(`INSERT INTO students_records(STUDENTSNAME,ADM_NUMBER,YEAROFSTUDY,PROGRAM,EMAIL_ADDRESS) VALUES("${dataIns.name}","${dataIns.adm}","${dataIns.year}","${dataIns.program}","${dataIns.email}")`);
  getData()
})