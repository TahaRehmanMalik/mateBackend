const {getMobilePhone}=require("../Modal/MobileConfig");

const fetchMobilePhones=async(req,res)=>{
    try {
        const docRef=await getMobilePhone();
        const data=docRef.docs.map(doc=>{
            return doc.data();
        })
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send({error:"The error in fetch MobilePhone data"});
    }
}
module.exports={fetchMobilePhones};