module.exports = (sequelize, DataTypes) => {
    const blogs = sequelize.define('blogs', {
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        writer_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        banner_image:{
            type: DataTypes.STRING,
            allowNull: false
        },
        post_image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        place: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        writer_image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        latest_post: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    blogs.sync({alter: true});

    // blogs.sync();

    return blogs;
}
