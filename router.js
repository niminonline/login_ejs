import express from 'express';
const router= express.Router();


const credentials={
    username:"admin@email.com",
    password:"admin@123"
}


router.get('/',(req,res)=>
{
    res.render("login");
}) 

const ejsData=[{image:"",title:"Express",description:"",btnText:""}];
router.get('/home',(req,res)=>
{
    res.render("home",{data:ejsData});
})


router.post("/login",(req,res)=>
{
    if ((req.body.username== credentials.username)&& (req.body.password== credentials.password))
    {
        // res.end("Successfull")
        res.redirect("home");
    }
    else
    res.end("Invalid")
});





export default router;
