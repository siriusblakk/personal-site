import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Gunnar Maples</h2>
        <p><a href="mailto:gunnarmaples@gmail.com">gunnarmaples_at_gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Gunnar. When I grow up, I want to be a Renaissance man. I am an MBA student at <a href="https://michiganross.umich.edu/graduate/full-time-mba">Michigan Ross</a>, a <a href="https://engineering.wisc.edu/departments/mechanical-engineering/">UW-Madison ME</a> Alum, a recreational artist and musician,
        and was a Test Engineer at <a href="https://energyrecovery.com/">Energy Recovery</a>.
      </p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Gunnar Maples <Link to="/">gunnarmaples.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
