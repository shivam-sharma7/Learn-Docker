import express from 'express';
const app = express();

const PORT = 3000;

app.get('/',(req, res)=>{

    res.send("Welcome to docker tutorial")
})

app.listen(PORT, ()=>{
    console.log("app is running at "+`${PORT}`)
})