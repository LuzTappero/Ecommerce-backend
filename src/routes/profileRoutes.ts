import express from 'express'
import ProfileController from '../controllers/profileController'
const profileRoutes = express.Router()
import { verifyToken } from '../middlewares/verifyToken'


profileRoutes.get("/byUser/:userId",verifyToken, ProfileController.getByUserId)

profileRoutes.post("/create",verifyToken, ProfileController.createProfile)

profileRoutes.put("/:profile_id",verifyToken, ProfileController.updateProfile)


export default profileRoutes



