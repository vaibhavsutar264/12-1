import React from 'react'
import { Link } from 'react-router-dom'
import NotFound from '../../assets/images/svg/404.svg'

const Notfound = () => {
  return (
    <section className="notFound-wrapper">
      <div className="wrapper-inner">
        <img
          className="notfound-svg"
          src={NotFound}
          alt="404 - Page Not Found"
        />
        <div className="inner-content">
          <h1>Page Not Found.</h1>
          <Link to="/">Home</Link>
        </div>
      </div>
    </section>
  )
}

export default Notfound
