import React from 'react';
import PropTypes from 'prop-types';

import Certification from './Certifications/Certification';

const Certifications = ({ data }) => (
  <div className="certification">
    <div className="link-to" id="certification" />
    <div className="title">
      <h3>Certification</h3>
    </div>
    {data.map((degree) => (
      <Certification
        data={degree}
        key={degree.school}
      />
    ))}
  </div>
);

Certifications.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Certifications.defaultProps = {
  data: [],
};

export default Certifications;
