import jwt from 'jsonwebtoken'

const adminAuth = async (req,res,next) = {
  try {
    const { token } = req.headers
    if (!token) {
      return res.json({success:false, message:"Not Authorized. Login Again"})
    }
  } catch (error) {
    
  }
}