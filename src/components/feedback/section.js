import React from "react";
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div className="section">
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};

export { Section };

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};