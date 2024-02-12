import React from 'react'
import "./Blog.css"
import Blogapi from './Blogapi'
const BlogSec = ({numshow}) => {
    const blogshow = Blogapi.slice(0 , numshow)
  return (
    <>
      <div className="blogSec-container">
        <div className="blog-cards">
           {blogshow.map((blog)=>(
             <div key={blog.id} className="blog-card">
             <img src={blog.image} alt="" />
             <div className="blog-detail">
                 <div className="admin">
                     <p>{blog.name}</p>
                     <p>{blog.Date}</p>
                     <span>3</span>
                 </div>
                 <p className='comment'>{blog.comment}</p>
                 <div className="title">
                     <h4>{blog.title}</h4>
                     <p>{blog.description}</p>
                 </div>
             </div>
         </div>
           ))}
        </div>
      </div>
    </>
  )
}

export default BlogSec
