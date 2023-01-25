import React from 'react'

const Filter = ({ title = 'Spectacles Woman'}) => {
  return (
    <div className='wrapper'>
      <div className='section'></div>
      <div className='section'>
        <h1>{title}</h1>
      </div>
      <div className='section filter'>
        <div className='sub-section'><p>colour</p></div>
        <div className='sub-section'><p>shape</p></div>
        <div></div>
      </div>
    </div>
  )
};

export default Filter;