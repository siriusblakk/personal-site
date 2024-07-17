import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Gunnar Maples' personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            This is a place to share my technical work and personal projects in my own way.
          </p>
        </div>
      </header>
      <p> Welcome! Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">technical work</Link>, {' '}
        <Link to="/personal">fun personal projects</Link>, {' '}
        or <Link to="/contact">reach out to contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
