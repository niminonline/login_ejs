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





app.listen(port,()=>{console.log(`Server started on http://localhost:${port}`)});