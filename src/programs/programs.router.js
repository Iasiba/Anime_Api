const router = require('express').Router()
const passport = require('passport')

const { uploadPrograms } = require('../utils/multerProgram')
require('../middleware/auth.middleware')(passport)

const programServices = require('./programs.http')

router.route('/') //* /api/v1/programs/
    .get(programServices.getAllPrograms)
    .post(programServices.createProgram)
    //.post(uploadPrograms.single('utilss'), programServices.createProgram)
router.route('/:id')///api/v1/programs/:id 
    .get(programServices.getProgramById)
    .put(programServices.editProgram)
    //.put(uploadPrograms.single('util'), programServices.editProgram)
    .delete(programServices.deleteProgram)
    //.delete(passport.authenticate('jwt', {session: false}), programServices.deleteProgram)
exports.router = router