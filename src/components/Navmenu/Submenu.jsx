import React, { Fragment } from 'react'
import clsx from 'clsx';

import MenuItem from './MenuItem';

import { submenuData } from './data';

const Submenu = ({ toggle, handleClose }) => (
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
            />))
          }
        </ul>
      </Fragment>
    )}
  </div>
)

export default Submenu;