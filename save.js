
const Details = require('../models/details');


exports.saveDetails = async(req,res)=>{
    console.log("request is coming", req.body)
    try{
        const {Name, Email, Contactnumber} = req.body;

        await Details.create({
            name: Name,
            email: Email,
            contactnumber: Contactnumber
        });
        res.status(200).json("Details saved successfully");

        

    }catch(err){
console.log(err)
        res.status(500).json({error: err});

    }
}