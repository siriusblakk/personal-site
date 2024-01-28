import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Certifications/Certification';

const Certification = ({ data }) => (
  <div className="certification">
    <div className="link-to" id="certification" />
    <div className="title">
      <h3>Certification</h3>
    </div>
    {data.map((degree) => (
      <Degree
        data={degree}
        key={degree.school}
      />
    ))}
  </div>
);

Certification.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Certification.defaultProps = {
  data: [],
};

export default Certification;
