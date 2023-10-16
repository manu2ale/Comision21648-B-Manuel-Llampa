const { Router } = require('express');
const { createPost, deletePost, getPosts, crearPostView, updatePostView, viewOnePost, updatePost } = require('../controllers/controladores')
const router = Router();

router.get('/', getPosts);
router.get('/crear-post', crearPostView);
router.get('/editar-post/:id', updatePostView);
router.get('/:id', viewOnePost);
router.get('/borrar/:id', deletePost)

router.post('/', createPost);

router.post('/update', updatePost);


module.exports = router;