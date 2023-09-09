var _ = require('lodash');

const dummy = (blogs) => {
    return (1)
}

const totalLikes = (blogs) => {
    return (
        blogs.reduce((accumlator, currentValue) => accumlator + currentValue.likes, 0)
    )
}

const favoriteBlog = (blogs) => {
    const blog = blogs.find((blog) => blog.likes === Math.max(...blogs.map(blog => blog.likes)))
    delete blog.__v
    delete blog._id
    return(blog)
}

const mostBlogs = (blogs) => {

}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
}

