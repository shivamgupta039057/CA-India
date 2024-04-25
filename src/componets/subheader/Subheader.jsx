import React from 'react'

function Subheader({ heading, images, clas }) {
    return (
        <div class={`subheader section-bg no-overlay ${clas ? clas : ''}`} style={{ backgroundImage: `url(${images ? images : 'assets/images/blog/blog-bg.png'})`, backgroundPosition: "top center", height: "280px" }}>
            <div className="overlay"></div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8" style={{ zIndex: 999 }}>
                        <h1 class="page_title">{heading ? heading : ""}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subheader