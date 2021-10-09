const express = require('express')
const router = express.Router()
const {authUser,
    getProfileByUser,
    registerUser,
    updateUserProfile,
    getUsers,
} = require('../api/users')

router.route('/register').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(getProfileByUser).put(updateUserProfile)
router.route('/all').get(getUsers)
router.route('/:id').get(getProfileByUser).put(updateUserProfile)

module.exports = router