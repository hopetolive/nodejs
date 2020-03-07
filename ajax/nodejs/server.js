let express=require("express")


let port  = 3000

let app = express()

app.get("/",(req,res)=>{
     res.sendFile("/demo.html")
})
app.get("/contact",(req,res)=>{
    res.send("<h1>this is contat</h1>")
})


app.listen(port ,()=>{
    console.log("server is up on "+port )
})