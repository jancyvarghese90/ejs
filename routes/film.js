const express=require("express");
const router=express.Router();
var data=[{name:"Twisters",
    year:2024,
    category:"Thriller",
    language:"English",
    poster:"Twister.jpg"
},
    {name:"Turbo",
        year:2024,
        category:"Action",
        language:"Malayalam",
        poster:"Twister.jpg"
    },
    {name:"vaza",
        year:2024,
        category:"comedy",
        language:"Malayalam",
        poster:"Twister.jpg"
        }
]


//API methods
router.get('/',(req,res)=>{
    // console.log("Hello");
    // res.send("Hello,I am into EJS platform");
    // res.render('home',{name:"Jancy",course:"EJS"})
    res.render('home',{data:data})
})
router.get('/:id',(req,res)=>{
    const id=req.params.id;
    res.render('movie',{movie:data[id]})
})







module.exports=router;