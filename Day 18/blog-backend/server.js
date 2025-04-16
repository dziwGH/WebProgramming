const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware 
app.use(cors());
app.use(express.json());

// connect to mongo db

mongoose.connect('mongodb://localhost:27017/blogDB', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
.catch((err)=>console.error('MongoDB error', err));

// Define a schema and model

const postSchema = new mongoose.Schema({
    title: String,
    body: String,
});

const Post = mongoose.model('Post', postSchema);

// routes

app.get('/posts', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err) {
        res.status(500).json({message: 'Failed to fetch posts'});
    }
});

app.post('/posts', async (req, res) => {
    try {
        const {title, body} = req.body;
        const newPost = new Post({title, body});
        await newPost.save();
        res.json(newPost);
    }catch(err) {
        res.status(500).json({message: 'Failed to save post!'});
    }
});

app.delete('/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = await Post.findByIdAndDelete(id);

        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.json({ message: 'Post deleted successfully', post: deletedPost });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete post' });
    }
});

// put update

app.put('/posts/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {title, body} = req.body;

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            {title, body},
            {new:true} // return the updated post
        );

        if (!updatedPost) {
            return res.status(404).json({message: 'Post not found'});
        }

        res.json(updatedPost);

    }catch (err) {
        res.status(500).json({message: 'Failed to update post'});
    }
});

// start server

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});