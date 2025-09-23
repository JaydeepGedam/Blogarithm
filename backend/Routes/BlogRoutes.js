import express from 'express';
import { GetAllBlogs, CreateBlog } from '../controllers/BlogControllers.js';
const router = express.Router();

//get posts
router.get('/', GetAllBlogs)

//create post
router.post('/', CreateBlog)

export default router;