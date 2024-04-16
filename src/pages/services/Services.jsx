import React, { useEffect } from 'react'
import Services from '../../componets/services/Services'

function ServicesPages() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Services />
        </>
    )
}

export default ServicesPages