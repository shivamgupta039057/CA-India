import React from 'react'

function Subheader({ heading }) {
    return (
        <div class="subheader section-bg no-overlay" style={{ backgroundImage: `url("assets/images/blog/blog-bg.png")` }}>
            <div className="overlay"></div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8" style={{ zIndex: 999 }}>
                        <h1 class="page_title">{heading}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subheader