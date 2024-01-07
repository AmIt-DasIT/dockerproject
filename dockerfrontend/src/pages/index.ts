import Dashboard from "./Dashboard"
import BlogDetails from "./BlogDetails/BlogDetails"

export const routes = [
    { Component: Dashboard, path: '/' },
    { Component: Dashboard, path: '/post' },
    { Component: BlogDetails, path: '/post/:id' }
]