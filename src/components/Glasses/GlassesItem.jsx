import React from 'react'

const GlassesItem = ({ name, imageUrl }) => (
  <div className='glasses-item' style={{ backgroundImage: `url(${imageUrl})` }}>
    <h2>{name}</h2>
  </div>
)

export default GlassesItem;