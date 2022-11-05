import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../../images/svg/404.svg";

const Notfound = () => {
  return (
    <section className='notFound-wrapper'>
      <div className='wrapper-inner'>
        <img className="notfound-svg" src={NotFound} alt='404 - Page Not Found' />
        <div className='inner-content'>
          <h1>Oops! Page Not Found.</h1>
          <p>
            You didn't break the internet, but we can't find what you are
            looking for.
          </p>
          <Link to='/'>Get yourself home</Link>
        </div>
      </div>
    </section>
  );
};

export default Notfound;