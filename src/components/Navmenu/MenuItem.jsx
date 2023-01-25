import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const MenuItem = ({ name, submenu, handleClick }) => (
  <li className={clsx('menu-item', submenu && 'arrow')} onClick={submenu ? handleClick : () => {}}>{name}</li>
)

MenuItem.propTypes = {
  name: PropTypes.string,
  submenu: PropTypes.bool
}

export default MenuItem