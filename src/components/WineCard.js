import React from 'react'
import PropTypes from 'prop-types';

const WineCard = (props) => (
  <div
    css={`
      position: relative;
      display: block;
      margin: 1rem auto;
      padding: 0.5rem 1rem;
      min-height: 200px;
      width: 100%;
      max-width: 1024px;
      border: 1px solid black;
    `}
  >
    <span>
      {props.text}
    </span>
  </div>
)

// Static type checking for props
WineCard.propTypes = {
  text: PropTypes.string,
};

export default WineCard