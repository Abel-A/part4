const blogHelper = require('../utils/blog_helper')
const testBlogs = require('../utils/blog_helper_input')

describe('testing blog', () => {

  const mostLike = {
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
  }

  test('dummy returns one', () => {
    const blogs = []

    const result = blogHelper.dummy(blogs)
    expect(result).toBe(1)
  })

  test('return sum of total likes', () => {
    const result = blogHelper.totalLikes(testBlogs.listWithBlogs)
    expect(result).toBe(36)
  })

  test('return blog with most likes', () => {
    const result = blogHelper.favoriteBlog(testBlogs.listWithBlogs)
    expect(result == mostLike)
  })
})
