const router = require('express').Router()
const passport = require('passport')
require('../middleware/auth.middleware')(passport)
const { uploadChapter } = require('../utils/multer_Chapter')

const chapterServices = require('./chapters.http')

router.route('/:program_id/chapters')
    .get(chapterServices.getChaptersByProgram)
    .post( uploadChapter.single('chapter-video'), chapterServices.addChaptersToProgram)
//passport.authenticate('jwt', {session: false}),
router.route('/:program_id/chapters/:chapter_id')
    .get(chapterServices.getChapterById)
    .put(chapterServices.editChapter)
    .delete(chapterServices.deleteChapter)

exports.router = router