import React from 'react'

function Banner() {
    return (
        <div class="banner relative">

            <div class="banner_slider">
                {/* style="background-image: url(assets/images/banner/1.jpg);" */}
                <div className="slide_item section-bg no-overlay" style={{ backgroundImage: `url("assets/images/banner/banner.jpg")`, backgroundSize: "cover" }}>
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10" style={{ zIndex: 999 }}>
                                <div class="banner_text">
                                    <p class="subtitle">New Releases</p>
                                    <h1 class="title">
                                        Focus On Growing Your Business Trust The <br /><span>Accounting</span> To Us
                                    </h1>
                                    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    {/* <ul class="info mb-xl-30">
                                <li>
                                    <strong>Starring :</strong>
                                    The Adventures of Cameron Winklevoss (2010)
                                </li>
                                <li>
                                    <strong>Directors :</strong>
                                    Barry Silbert, Michael Saylor 
                                </li>
                                <li>
                                    <strong>Tag :</strong>
                                    Brian Armstrong
                                </li>
                            </ul> */}
                                    <a href="stream_details.html" class="thm-btn">
                                        <i class="fas fa-play"></i>
                                        GET A QUOTE
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div class="slide_item section-bg no-overlay" style="background-image: url(assets/images/banner/3.jpg);">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10">
                        <div class="banner_text">
                            <p class="subtitle">New Releases</p>
                            <h1 class="title">
                                Start Crypto Industry <br /><span>MARCH 2022</span>
                            </h1>
                            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <ul class="info mb-xl-30">
                                <li>
                                    <strong>Starring :</strong>
                                    The Adventures of Cameron Winklevoss (2010)
                                </li>
                                <li>
                                    <strong>Directors :</strong>
                                    Barry Silbert, Michael Saylor 
                                </li>
                                <li>
                                    <strong>Tag :</strong>
                                    Brian Armstrong
                                </li>
                            </ul>
                            <a href="stream_details.html" class="thm-btn">
                                <i class="fas fa-play"></i>
                                Start Trading
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="viewers_rate container">
                <li>
                    <div class="rate">
                        <div class="rating">
                            <i class="bi-star active"></i>
                            <i class="bi-star active"></i>
                            <i class="bi-star active"></i>
                            <i class="bi-star active"></i>
                            <i class="bi-star"></i>
                        </div>
                        <span>6.9/10</span>
                    </div>
                    <p class="mb-0 text">Critic's Rating</p>
                </li>
                <li>
                    <div class="rate">
                        <div class="rating">
                            <i class="bi-star active"></i>
                            <i class="bi-star active"></i>
                            <i class="bi-star active"></i>
                            <i class="bi-star active"></i>
                            <i class="bi-star"></i>
                        </div>
                        <span>3.9/5</span>
                    </div>
                    <p class="mb-0 text">Avg. User's Rating</p>
                </li>
                <li>
                    <div class="rate">
                        <div class="rating">
                            <i class="bi-star active"></i>
                            <i class="bi-star active"></i>
                            <i class="bi-star active"></i>
                            <i class="bi-star active"></i>
                            <i class="bi-star"></i>
                        </div>
                        <span>6.9/10</span>
                    </div>
                    <p class="mb-0 text">Rate Currency</p>
                </li>
            </ul>
        </div> */}

            </div>
        </div>
    )
}

export default Banner