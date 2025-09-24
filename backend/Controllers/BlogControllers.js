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
        const post = new PostModel(req.body);
        const savedPost = await post.save();
        res.status(201).json(savedPost);
    }
    catch(error){
        res.status(409).json({ message: error.message });
    }
}

//update post
export const UpdateBlog = async (req, res) => {
    try{
        const updateData = { ...req.body };
        if (req.file) {
            updateData.image = `/uploads/${req.file.filename}`;
        }
        const post = await PostModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
        res.status(200).json(post);
    }
    catch(error){
        res.status(409).json({ message: error.message });
    }
}

//delete post
export const DeleteBlog = async (req, res) => {
    try{
        await PostModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Post deleted successfully" });
    }
    catch(error){
        res.status(409).json({ message: error.message });
    }
}