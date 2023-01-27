import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types'

const FilterList = ({ filter, onFilter, filterData }) => (
  <div className='list'>
    <ul>
      {filterData.map(({ id, name }) => (
        <li 
          key={id} 
          onClick={() => onFilter(name)}
          className={clsx(filter.includes(name) && 'selected')}
        >
          {name}
        </li>
      ))}
    </ul>
  </div>
);

FilterList.propTypes = {
  filter: PropTypes.array,
  onFilter: PropTypes.func,
  filterData: PropTypes.array,
}

export default FilterList