import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text"> Have a question or project in mind? <br className="sm:block hidden" /> </p>
        <Link to="/contact" className="btn">
            contact
        </Link>
    </section>
  )
}

export default CTA