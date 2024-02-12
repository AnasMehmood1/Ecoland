import React from 'react'
import "./Blog.css"
import BlogSec from './BlogSec'
const BlogTitle = () => {
  return (
    <>
      <div className="blog-main-container">
        <div className="blog-text-area">
            <span>OUR BLOG</span>
            <h3>Recent Blog</h3>
        </div>
         
         <BlogSec numshow = {4}/>
      </div>
    </>
  )
}

export default BlogTitle
