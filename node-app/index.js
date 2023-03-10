import  express  from "express";

const app = express();
const PORT = 3000;

app.get('/',(req, res)=>{

    res.send("Welcome to Docker Tutoral");
})

app.listen(PORT,()=>{
    console.log("app is running at "+`${PORT}`);
})

