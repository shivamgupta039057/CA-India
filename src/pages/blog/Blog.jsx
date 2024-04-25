import React, { useEffect } from 'react'
import BlogSection from '../../componets/blog-section/BlogSection'
import Subheader from '../../componets/subheader/Subheader'
import { useThemeData } from '../../context/Context';



function Blog() {
    const { countdata } = useThemeData();
    // console.log("dskjfd" , );

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [countdata])
    return (
        <>
            <Subheader />
            <BlogSection />
        </>
    )
}

export default Blog