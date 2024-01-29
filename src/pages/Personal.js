import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Personal/Cell';
import data from '../data/personal';

const Personal = () => (
  <Main
    title="Personal Work"
    description="Learn about Gunnar Maples' personal projects."
  >
    <article className="post" id="personal">
      <header>
        <div className="title">
          <h2><Link to="/personal">Personal Work</Link></h2>
          <p>A selection of personal projects</p>
        </div>
      </header>
      {data.map((personal) => (
        <Cell
          data={personal}
          key={personal.title}
        />
      ))}
    </article>
  </Main>
);

export default Personal;
