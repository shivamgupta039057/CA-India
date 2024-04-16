import React from 'react'
import BlogSection from '../../componets/blog-section/BlogSection'
import Subheader from '../../componets/subheader/Subheader'

function Blog() {
    return (
        <>
            <Subheader heading={"Our Blog"} />
            <BlogSection />
        </>
    )
}

export default Blog