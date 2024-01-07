const { blogs } = require('../models');
const { validate } = require('../utils/utility')

exports.create = async (req, res) => {
    console.log("blogs create API called");

    const formData = req.body;
    const banner_image = req.files.banner_image;
    const post_image = req.files.post_image;
    const writer_image = req.files.writer_image;

    // console.log("This is one of the uploaded files", req.files.banner_image[0])

    try {

        const payload = {
            title: validate(res, formData.title, "Title"),
            writer_name: validate(res, formData.writer_name, "Writer Name"),
            category: validate(res, formData.category, "Category"),
            banner_image: validate(res, banner_image[0].filename, "Banner Image"),
            post_image: validate(res, post_image[0].filename, "Post Image"),
            place: validate(res, formData.place, "Place"),
            writer_image: validate(res, writer_image[0].filename, "Writer Image"),
            latest_post: validate(res, formData.latest_post, "Latest Post"),
            description: validate(res, formData.description, "Description")
        }

        const blogsCreated = await blogs.create(payload);
        if (blogsCreated) {
            console.log("blogs Created");

            return res.status(200).json({
                status: 'success',
                message: 'blogs Created Successfully'
            })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            message: 'Server Error!'
        })
    }
}



exports.read = async (req, res) => {
    console.log("Blogs Read Called");

    await blogs.findAll({
        order: [['post_id', 'ASC']]
    }).then(async (message) => {
        console.log("Blog Read Successful");

        return res.status(200).json({
            status: 'success',
            data: message
        })
    }).catch(err => {
        console.log(err);

        return res.status(500).json({
            status: 'failed',
            message: 'Internal Server Error'
        })
    })
}



exports.readById = async (req, res) => {

    const post_id = req.params['id']
    console.log("Post Id here is : " + post_id);

    await blogs.findOne({ where: { post_id: post_id } }).then(async (data) => {
        console.log("Blog By Id Read Successful");

        return res.status(200).json({
            status: 'success',
            data: data
        })
    }).catch(err => {
        console.log(err);

        return res.status(500).json({
            status: 'failed',
            message: 'Internal Server Error'
        })
    })
}
