import express from 'express';
import { AuthControllers } from './auth.controller';

const router = express.Router();

// Route for user login
router.post('/login', AuthControllers.loginUser);

export const AuthRoutes = router;