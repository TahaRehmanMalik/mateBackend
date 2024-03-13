
const {getBrands}=require("../Modal/BrandConfig");
const fetchBrands=async(req,res)=>{
    try {
        const docRef=await getBrands();
        const list=docRef.docs.map((doc)=>{
            return doc.data();
        })
        res.status(200).send(list); 
    } catch (error) {
        console.log(error);
        res.status(500).send({error:"The error in fetch data"});
    }
    }

module.exports={fetchBrands};