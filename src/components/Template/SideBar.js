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
        <p><a href="mailto:gunnarmaples@gmail.com">gunnarmaples@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Gunnar. I am a <a href="https://engineering.wisc.edu/departments/mechanical-engineering/">UW-Madison ME</a> graduate, NSF I-CORPS Alum,
        and Test Engineer at <a href="https://energyrecovery.com/">Energy Recovery</a>. Previously,
        I was a Graduate Researcher at the <a href="https://sel.me.wisc.edu/">Solar Energy Laboratory (SEL)</a> under
        Greg Nellis and Mark Anderson.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Gunnar Maples <Link to="/">gunnarmaples.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
