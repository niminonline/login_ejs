import express from 'express';
import router from express.Router();
import bodyParser from 'body-parser';

const credentials={
    username:"admin@email.com",
    password:"admin@123"
}
router.post("/login",(req,res)=>
{
    if ((req.body.username== credentials.username)&& (req.body.password== credentials.password))
    {
        res.redirect("/home")
    }
    else
    res.end("Invalid")
});





export router;
