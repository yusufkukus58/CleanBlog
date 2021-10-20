const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// Core Modules
const ejs = require('ejs');

// My Modules
const pageController = require('./controllers/pageControllers');
const postController = require('./controllers/postController');

const app = express();

// Connect Database
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    methodOverride('_method', {
        methods: ['POST', 'GET'],
    })
);

// Routes
app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPage);
app.get('/posts/edit/:id', pageController.getEditPage);

app.get('/', postController.getAllPosts);
app.get('/posts/:id', postController.getPost);
app.post('/posts', postController.createPost); // Add post
app.put('/posts/:id', postController.updatePost); // Update post
app.delete('/posts/:id', postController.deletePost); // Delete post

//
const port = 3000;

app.listen(port, () => {
    console.log(`Server Started at port: ${port}!`);
});