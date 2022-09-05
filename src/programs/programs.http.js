const programsController=require('./programs.controller.js')

const getAllPrograms=(req,res)=>{
    const programs=programsController.getAllPrograms()
    return res.status(200).json({
        items:programs.length,
        programs:programs
    })
}
const getProgramById=(req,res)=>{
    let response
    const id=req.params.id
    if(id){
        const programs=programsController.getProgramById(id)
        if(programs!=-1){
            res.status(200).json({
                title: programs.title,
                content:programs})
        }else{
            res.status(400).json({
                message:"id not found"
            })
        }
    }else{
        res.status(400).json({
            message:"invalid id"
        })
    }
}
const createProgram=(req,res)=>{
    const data=req.body
    if(data&&data.title&&data.description&&data.seasons&&data.cover&&data.categories){
        const program=programsController.createProgram(data)
        res.status(200).json({
            message:"created succesfull",
            program:program
        })
    }else{
        res.status(400).json({
            message:"datos incompletos",
            example:{
                title: "Title",
                description: "Description",
                seasons: "Season",
                cover: "Cover",
                categories: "Category",
              }
        })
    }
}
const deleteProgram=(req,res)=>{
    const id=req.params.id
    if(id){
        const deleted=programsController.deleteProgram(id)
        deleted?res.status(200).json({message:"deleted succesfully"}):res.status(400).json({message:"program no exist"})
    }else{
        res.status(400).json({message:"invalid id"})
    }
}
const editProgram=(req,res)=>{
    const data=req.body
    const id=req.params.id
    if(data&&data.title&&data.description&&data.seasons&&data.cover&&data.categories){
        res.status(200).json({
            program_id:id,
            program:programsController.editProgram(id,data)
        })
    }
}
module.exports={
    getAllPrograms,
    getProgramById,
    createProgram,
    deleteProgram,
    editProgram
}



