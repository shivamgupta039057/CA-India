import React from 'react'
import './style.css'

function BlogSection() {
    const BlogObject = [
        {
            date: '10',
            months: "Jan 2019",
            Comment: '10 Comments',
            likes: ' 22 Likes',
            heading: 'College Life Made Easy',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            images: "assets/images/blog/1.jpg"
        },
        {
            date: '11',
            months: "Jan 2020",
            Comment: '11 Comments',
            likes: ' 23 Likes',
            heading: 'Chartered Accountant Blog',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            images: "assets/images/blog/2.jpg"

        },
        {
            date: '12',
            months: "Jan 2021",
            Comment: '12 Comments',
            likes: ' 27 Likes',
            heading: 'Another Blog Heading',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            images: "assets/images/blog/3.jpg"

        },


    ]
    return (
        <>
            <section class="section-padding our_articles our-work-sec">
                <div class="container">
                    {/* <div class="section-header">
                        <h3 class="title">Our Blog</h3>
                    </div> */}
                    <div class="row">

                        <div className="blog-slider arrow-layout-2 row">

                            {BlogObject?.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className="col-sm-4">
                                        <div className="col-12 post slide-item">
                                            <div className="post-wrapper bx-wrapper">
                                                <div className="post-img animate-img">
                                                    <a href="blog-details.html">
                                                        <img src={item?.images} className="full-width" alt="img" />
                                                    </a>
                                                    <div className="post-date">
                                                        <div className="text-custom-white fw-600 date bg-custom-blue">{item?.date}</div>
                                                        <div className="text-custom-white year">{item?.months}</div>
                                                    </div>
                                                </div>
                                                <div className="blog-meta padding-20 bg-custom-white p-relative">
                                                    <div className="post-meta mb-xl-20">
                                                        <a href="blog-details.html" className="text-light-dark mr-1">
                                                            <span className="text-custom-blue"> <i className="fas fa-comment"></i> </span>
                                                            {item?.Comment}
                                                        </a>
                                                        <a href="blog-details.html" className="text-light-dark mr-1">
                                                            <span className="text-custom-blue"> <i className="fas fa-thumbs-up"></i> </span>
                                                            {item?.likes}
                                                        </a>
                                                    </div>
                                                    <div className="post-heading">
                                                        <h2>
                                                            <a href="blog-details.html" className="text-custom-black fw-600 fs-20">{item.heading}</a>
                                                        </h2>
                                                        <p className="text-light-dark no-margin">{item.paragraph}</p>
                                                    </div>
                                                </div>
                                                <div className="post-footer">
                                                    <a href="blog-details.html" className="btn btn-sm animated-button victoria-one pt-2">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogSection