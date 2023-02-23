import express from "express";
import path, { dirname } from 'path';
import url from 'url'
import bodyParser from "body-parser";

import router from "./router.js";

const app= express();
const port= process.env.PORT|3000;
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use('/public',express.static(path.join(__dirname+"public_html")));
app.use(router);
app.use("/assets",express.static(path.join(__dirname)+ 'public_html/assets'));

// function emailValidation(){
// {
// var mailregex = /\b^[^ ][a-z.\-_0-9]+@[a-z0-9]+\.[a-z]{2,3}\b/;
// if(!(document.getElementById("email").value).match(mailregex))
// {
//   document.getElementById("email-error").innerText= ("Enter a valid email id");
//   emailvalid =false;
// }
// else
// {
//   document.getElementById("email-error").innerText= "";

// emailvalid=true;
// } } }




app.listen(port,()=>{console.log(`Server started on http://localhost:${port}`)});