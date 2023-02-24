import express from 'express';
//import session from 'express-session';
const router= express.Router();

const credentials={
    username:"admin@email.com",
    password:"admin@123"
}



router.get('/',(req,res)=>
{
    
    res.render("login",{x:""});
}) 

const ejsData=[{image:"/assets/images/javascript.png",title:"JavaScript",description:"JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",btnText:"Js"},
                {image:"/assets/images/express.png",title:"Express",description:"Express web framework (Node.js/JavaScript) Express is a popular unopinionated web framework, written in JavaScript and hosted within the Node.js runtime environment. ",btnText:"expressJs"},
                {image:"/assets/images/node.png",title:"NodeJs",description:"Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment.",btnText:"nJs"},
                {image:"/assets/images/ejs.png",title:"EJS",description:"EJS is a tool for generating web pages that can include dynamic data and can share templated pieces with other web pages (such as common headers/footers). It is not a front-end framework.",btnText:"eJs"}
];

// router.post("/login",(req,res)=>
// {
//     if ((req.body.username== credentials.username)&& (req.body.password== credentials.password))
//     {
//         console.log(req.session);
//         console.log(req.body.username);
//          req.session.user= req.body.username;
//         // res.end("Successfull")
       
//      //  res.render("login",{x:"Login successfully"});
         
//      res.redirect("home")
//     //    res.set({'Refresh': '25; url=home'});
//     //    next(res.redirect("home"));
       
       
//     //    setTimeout(() => {
//     //     res.redirect("home");
        
//     //    }, 3000); 
//     }
//     else
//     res.end("Invalid")
// });

router.get('/home',(req,res)=>
{

    res.render("home",{data:ejsData});

    // if(session.user){
    //     res.render("home",{data:ejsData});
    // }
    // else{
    //     res.send("Unauthorized Access");
    // }
})





export default router;
