import express from "express";
import path, { dirname } from 'path';
import url from 'url'
import bodyParser from "body-parser";
import router from "router";

const app= express();
const port= process.env.PORT|3000;
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
app.set('view engine','ejs');
console.log();
app.use(express.static(path.join(__dirname+"public_html")));

app.get('/',(req,res)=>
{
    res.render("login");
})



app.listen(port,()=>{console.log(`Server started on http://localhost:${port}`)});