import PostModel from '../models/PostModel.js'

//get all posts
export const GetAllBlogs = async (req, res) => {
    try {
        const post = await PostModel.find();
        res.status(200).json(post);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//create post
export const CreateBlog = async (req, res) => {
    try{
        const post = req.body;
        const newpost = new PostModel(post);
        await newpost.save();
        res.status(201).json(newpost);
    }
    catch(error){
        res.status(409).json({ message: error.message });
    }
}