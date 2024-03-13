const express=require("express");
const {fetchMobilePhones}=require("../controller/Mobiles");

const router=express.Router();
router.get("/",fetchMobilePhones);
exports.router=router;

