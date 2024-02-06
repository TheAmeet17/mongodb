import userModel from "../models/user.js";

export const postfunction = (req,res)=>{
  
  const newuser =  userModel.create(req.body);
 res.send("data is sended Successfully")
  
}

export const getfunction = async(req,res)=>{
  
    const newuser = await  userModel.find({})
   
   res.json({newuser});
    
  }


  export const getbyidfunction = (req,res)=>{
  
    const newuser =  userModel.findOne({userName:req.body.userName})
   res.send("data is fetched by id Successfully")
    
  }


  export const updatefunction = (req,res)=>{
     const id = parseInt(req.params.id);
    const newuser =  userModel.findOneAndUpdate({_id:id}, req.body);
   res.send("data is updated Successfully")
    
  }


  export const deletefunction = (req,res)=>{
    const id = parseInt(req.params.id);
    const newuser =  userModel.findOneAndDelete({_id:id});
   res.send("data is deleted Successfully")
    
  }