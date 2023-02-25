import express from 'express';
const router= express.Router();

const credentials={
    username:"admin@email.com",
    password:"admin@123"
}
// const  nocache =(req, res, next) =>{
//     res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
//     res.header('Expires', '-1');
//     res.header('Pragma', 'no-cache');
//     next();
//   }

// const nocache =((req,res,next)=>{   
//      res.header('Cache-control','no-cache,private,no-store,must-revalidate,max-stale=0,post-check=0,pre-check=0');
//     next();
//     })


const homeAuth= (req,res,next)=>{
    console.log(req.session.name);
    if (req.session.name)
        next();    
    else
    res.redirect("/")
}

const loginAuth=(req,res,next)=>{
    if(req.session.name)
        res.redirect("home");
    else
        next();
 }
router.get('/',loginAuth,(req,res)=>
{
    console.log(req.sessionID);
    res.render("login",{message:""});
  
}) 
router.get('/login',(req,res)=>
{
    res.redirect("/");
}) 

const ejsData=[{image:"/assets/images/javascript.png",title:"JavaScript",description:"JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",btnText:"Js"},
                {image:"/assets/images/express.png",title:"Express",description:"Express web framework (Node.js/JavaScript) Express is a popular unopinionated web framework, written in JavaScript and hosted within the Node.js runtime environment. ",btnText:"expressJs"},
                {image:"/assets/images/node.png",title:"NodeJs",description:"Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment.",btnText:"nJs"},
                {image:"/assets/images/ejs.png",title:"EJS",description:"EJS is a tool for generating web pages that can include dynamic data and can share templated pieces with other web pages (such as common headers/footers). It is not a front-end framework.",btnText:"eJs"}
];

router.post("/login",(req,res)=>
{
    if ((req.body.username == credentials.username)&& (req.body.password== credentials.password))
    {
    req.session.name= req.body.username;  
     res.redirect("home")
    }
    else
    res.end("Invalid")
});

router.get('/home',homeAuth,(req,res)=>
{
    res.render("home",{data:ejsData,user:req.session.name});
})

router.get("/logout",(req,res)=>{
    req.session.destroy();
    // res.header('Cache-control','no-cache,private,no-store,must-revalidate,max-stale=0,post-check=0,pre-check=0');
    res.render("login",{message:"Logged out successfully"})

})

export default router;
