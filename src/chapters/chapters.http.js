const chaptersController = require('./chapters.controllers')
const getChaptersByProgram=(req,res)=>{
    const program_id=req.params.program_id
    if(program_id){
        res.status(200).json({
            programs:chaptersController.getChaptersByProgram(program_id)
        })
    }else{
        res.status(404).json({message:"chapter not found"})
    }  
}
const addChaptersToProgram=(req,res)=>{
    const program_id=req.params.program_id
    const data=req.body
    if(data&&program_id){
        res.status(200).json({
            message:"added succesfully",
            programs:chaptersController.createChapter(data,program_id)})
    }else{
        res.status(400).json({message:"program not found"})   
    }
}
const getChapterById=(req,res)=>{
    const program_id=req.params.program_id
    const chapter_id=req.params.chapter_id
    if(chapter_id){

        chaptersController.getChapterById(chapter_id)?
        res.status(200).json({
            chapter:chaptersController.getChapterById(chapter_id)
        })
        :
        res.status(400).json({
            message:"invalid id"
        })
    }else{
        res.status(400).json({message:"invalid Id"})
    }
}
const deleteChapter=(req,res)=>{
    const program_id=req.params.program_id
    const chapter_id=req.params.chapter_id
    if(chapter_id){
        const deleteChapter=chaptersController.deleteChapter(chapter_id)
        deleteChapter? res.status(200).json({message:"deleted succesfully"}):res.status(400).json({message:"chapter not exist"})
    }else{
        res.status(400).json({message:"chapter not found"})
    }
}
const editChapter=(req,res)=>{
    const data=req.body
    const program_id=req.params.program_id
    const chapter_id=req.params.chapter_id
    if(data&&chapter_id){
        res.status(200).json({
            message:"succesfully",
            chapter_edited:chaptersController.editChapter(chapter_id,data)
        })
    }else{
        res.status(400).json({message:"chapter not found"})
    }
}

module.exports={
    getChaptersByProgram,
    addChaptersToProgram,
    getChapterById,
    editChapter,
    deleteChapter
}