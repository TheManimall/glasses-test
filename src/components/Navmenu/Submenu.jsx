import React, { Fragment } from 'react'
import clsx from 'clsx';
import PropTypes from 'prop-types'

import MenuItem from './MenuItem';

import { submenuData } from './data';

const Submenu = ({ toggle, handleClose, handleOpen }) => (
  <div className={clsx('submenu', toggle && 'active')}>
    {toggle && (
      <Fragment>
        <div className='close-menu' onClick={handleClose}>
          <p>back</p>
        </div>
        <ul>
          {submenuData.map(({ name, id }) => (
            <MenuItem 
              key={id} 
              name={name}
              submenu
              handleClick={() => handleOpen(name)} 
            />))
          }
        </ul>
      </Fragment>
    )}
  </div>
)

Submenu.propTypes = {
  toggle: PropTypes.bool,
  handleClose: PropTypes.func,
  handleOpen: PropTypes.func,
}

export default Submenu;