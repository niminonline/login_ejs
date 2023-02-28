import express from "express";
import path from 'path';
import url from 'url'
import bodyParser from "body-parser";
import session from "express-session";
import router from "./router.js";

const app= express();
const port= process.env.PORT|3000;
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


//===========Set View Engine=============
app.set('view engine','ejs');

//=========== Use midddleware=============
app.use(bodyParser.urlencoded({extended:true}));
app.use('/public',express.static(path.join(__dirname+"public_html")));

//Session
app.use(session({
       secret:"abcabc",saveUninitialized:true, resave:true,
cookie:{maxAge:1000000,
        } }));

app.use((req,res,next)=>{   
     res.header('Cache-control','no-cache,private,no-store,must-revalidate,max-stale=0,post-check=0,pre-check=0');
    next();
    })
//</Session>
app.use(router);
app.use("/assets",express.static(path.join(__dirname)+ 'public_html/assets'));



app.listen(port,()=>{console.log(`Server started on http://localhost:${port}`)});