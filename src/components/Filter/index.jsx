import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom';

import FilterList from './FilterList';

import { getTitleFromLocation } from '../../helpers/helpers'
import { colorFilter, shapeFilter } from './data';

const Filter = ({ onFilter, filter }) => {
  const [isColorOpen, setIsColorOpen] = useState(false)
  const [isShapeOpen, setIsShapeOpen] = useState(false)

  const { pathname } = useLocation()

  const handleOpenColor = useCallback(() => {
    setIsColorOpen(prevState => !prevState)
  }, [])

  const handleOpenShape = useCallback(() => {
    setIsShapeOpen(prevState => !prevState)
  }, [])

  return (
    <div className='wrapper'>
      <div className='section'></div>
      <div className='section'>
        <h1>{getTitleFromLocation(pathname)}</h1>
      </div>
      <div className='section filter'>
        <div className='sub-section' onClick={handleOpenColor}>
          <p>colour</p>
          {isColorOpen && (
            <FilterList 
              filter={filter}
              onFilter={onFilter}
              filterData={colorFilter}
              onClose={handleOpenColor}
            />
          )}
        </div>
        <div className='sub-section' onClick={handleOpenShape}>
          <p>shape</p>
          {isShapeOpen && (
            <FilterList 
              filter={filter}
              onFilter={onFilter}
              filterData={shapeFilter}
            />
          )}
        </div>
        <div></div>
      </div>
    </div>
  )
};

Filter.propTypes = {
  filter: PropTypes.array,
  onFilter: PropTypes.func,
}


export default Filter;