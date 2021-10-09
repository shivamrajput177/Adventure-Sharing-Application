const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const authUser = asyncHandler(async(req,res) => {
    const {email,password} = req.body
    const user  = await User.findOne({email})

    if (user && (await user.matchPassword(password))) {
        res.json({
          _id: user._id,
          username: user.username,
          profile_img: user.profile_img,
        })
      } else {
        res.status(401)
        throw new Error('Invalid email or password')
      }
})

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    const userExists = await User.findOne({ email })
  
    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }
  
    const user = await User.create({
      username,
      email,
      password,
    })
  
    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
  })
  
  const getProfileByUser = asyncHandler(async (req, res) => {
    console.log(req.params.id)
    const user = await User.findById(`${req.params.id}`)
  
    if (user) {
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        profile_img: user.profile_img
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })
  
  const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id)
  
    if (user) {
      user.username = req.body.username || user.username
      user.email = req.body.email || user.email
      if (req.body.password) {
        user.password = req.body.password
      }
  
      const updatedUser = await user.save()
  
      res.json({
        id: updatedUser.id,
        username: updatedUser.username,
        email: updatedUser.email,
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })

  const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
  })

  module.exports =  {
    authUser,
    registerUser,
    getProfileByUser,
    updateUserProfile,
    getUsers,
  }