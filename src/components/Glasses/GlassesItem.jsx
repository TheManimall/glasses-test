import React from 'react'
import PropTypes from 'prop-types'

const GlassesItem = ({ name, imageUrl }) => (
  <div className='glasses-item' style={{ backgroundImage: `url(${imageUrl})` }}>
    <h2>{name}</h2>
  </div>
)

GlassesItem.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default GlassesItem;