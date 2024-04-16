import React, { useEffect } from 'react'
import BlogSection from '../../componets/blog-section/BlogSection'
import Subheader from '../../componets/subheader/Subheader'

function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Subheader heading={"Our Blog"} />
            <BlogSection />
        </>
    )
}

export default Blog