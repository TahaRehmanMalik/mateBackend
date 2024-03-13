const express=require("express");
const {fetchBrands}=require("../controller/Brands");
const router=express.Router();

router.get("/",fetchBrands);
exports.router=router;