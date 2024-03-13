const express=require('express');
const cors=require('cors');
const brandRouter=require("./route/Brands");
const mobilePhoneRouter=require("./route/MobilePhones")

const app=express();
app.use(cors());
app.use(express.json());
app.use('/brands',brandRouter.router);
app.use('/mobilePhones',mobilePhoneRouter.router);

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})