import express from 'express';
import { GetAllBlogs, CreateBlog, UpdateBlog, DeleteBlog } from '../controllers/BlogControllers.js';
const router = express.Router();

//get posts
router.get('/', GetAllBlogs)

//create post
router.post('/', CreateBlog)

//update post
router.put('/:id', UpdateBlog)

//delete post
router.delete('/:id', DeleteBlog)

export default router;