const express = require('express');

const router = express.Router();

const blogs = require("../controllers/blogs");


router.get('/', blogs.read);

router.post('/create', blogs.create);

router.get('/post/:id', blogs.readById);


module.exports = router;
