const { PostModel } = require('../Models/Post')

async function getPosts(req, res) {
    const allPosts = await PostModel.findAll();

    res.render('index', { allPosts });
}

function crearPostView(req, res) {
    res.render("newPost");
}

async function updatePostView(req, res) {
    const id = req.params.id;
    const post = await PostModel.findByPk(id)
    if (!post) {
        return res.redirect('/')
    }
    res.render("updatePost", { post });
}

async function viewOnePost(req, res) {
    const id = req.params.id;
    const post = await PostModel.findByPk(id)
    if (!post) {
        return res.redirect('/')
    }
    res.render("viewPost", { post });
}

//Database changes
async function createPost(req, res) {
    const { titulo, contenido, imageLink } = req.body;
    await PostModel.create({ titulo, contenido, imageLink });
    res.redirect("/");
}

async function updatePost(req, res) {
    const { id, titulo, contenido, imageLink } = req.body;

    const post = await PostModel.findByPk(id);
    await post.update({ titulo, contenido, imageLink })

    res.redirect('/')
}

async function deletePost(req, res) {
    const id = req.params.id;
    await PostModel.destroy({
        where: {
            id: id
        }
    });
    res.redirect('/')
}

module.exports = { viewOnePost, crearPostView, updatePostView, getPosts, createPost, updatePost, deletePost }