const express = require('express');

const router = express.Router();

const blogs = require("../controllers/blogs");
const { upload } = require('../middleware/fileupload');


router.get('/', blogs.read);

router.post('/create', upload.fields([{ name: 'banner_image' }, {name: 'writer_image'}, {name: 'post_image'}, { name: 'textData' }]), blogs.create);

router.get('/post/:id', blogs.readById);


module.exports = router;
