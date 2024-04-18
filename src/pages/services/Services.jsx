import React, { useEffect } from 'react'
import Services from '../../componets/services/Services'
import { useThemeData } from '../../context/Context';
import Subheader from '../../componets/subheader/Subheader';


function ServicesPages() {
    const { countdata } = useThemeData();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [countdata])
    return (
        <>
        <Subheader
        heading={"Services Pages"}
            />
            {/*  */}

            <section class="section-padding bg-light-white blog-details">
      <div class="container">
        <div class="row">
          <h6 class="d-none">1</h6>
          <div class="col-12">
            <div class="blog-details bx-wrapper bg-custom-white padding-20">
                dsfukjgjiodfklijlk
                </div>
                </div>
                </div>
                </div>
                </section>





            {/*  */}
        </>
    )
}

export default ServicesPages