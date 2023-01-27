import React, { useState, useRef, useEffect, useCallback, Fragment } from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'

import MenuItem from './MenuItem';
import Submenu from './Submenu';

import { menuData } from './data';
    
const Navmenu = ({ onSetPage, onSetFilter }) => {
  const [menuToggle, setMenuToggle] = useState(false)
  const [submenuToggle, setSubmenuToggle] = useState(false)
  const [linkName, setLinkName] = useState('')

  const buttonRef = useRef()
  const menuRef = useRef()
  const handleCloseRef = useRef()

  const navigate = useNavigate()

  const handleOpenMenu = useCallback(() => {
    setMenuToggle(true);
  }, [])

  const handleOpenSubmenu = useCallback((name) => {
    setSubmenuToggle(true);
    setMenuToggle(true)
    setLinkName(name)
  }, [])

  const handleOpenPage = useCallback((name) => {
    navigate(`${linkName}-${name}`)
    setSubmenuToggle(false)
    setMenuToggle(false)
    onSetPage(1)
    onSetFilter([])
  }, [linkName])

  const handleCloseSubmenu = useCallback(() => {
    setSubmenuToggle(false);
  }, [])

  const handleCloseBothMenus = useCallback(() => {
    setMenuToggle(false);
    setSubmenuToggle(false);
  }, [])

  // HANDLE CLOSE MENU BY MOUSELEVE
  useEffect(() => {
    if (menuToggle) {
      handleCloseRef.current.addEventListener('mouseover', handleCloseBothMenus)
    }

    return () => {
      handleCloseRef.current.removeEventListener('mouseover', handleCloseBothMenus)
    }
  }, [menuToggle])

  // HANDLE OPEN MENU BY HOVER
  useEffect(() => {
    buttonRef.current.addEventListener('mouseover', handleOpenMenu)

    return () => {
      buttonRef.current.removeEventListener('mouseover', handleOpenMenu)
    }
  }, [])

  return (
    <nav className="navmenu">
      <div className={clsx('toggle-button', menuToggle && 'active')} ref={buttonRef}>Menu</div>
      <div className={clsx('slide-menu', menuToggle && 'active')} ref={menuRef}>
        {menuToggle && (
          <Fragment>
            <ul>
              {menuData.map(({ name, submenu, id }) => (
                <MenuItem 
                  key={id} 
                  name={name} 
                  submenu={submenu}
                  handleClick={() => handleOpenSubmenu(name)} 
                />))
              }
            </ul>
          </Fragment>
        )}
      </div>
      <Submenu 
        toggle={submenuToggle}
        handleClose={handleCloseSubmenu}
        handleOpen={handleOpenPage} 
      />
      <div className='handle-close-menu' ref={handleCloseRef} />
    </nav>
  );
};

Navmenu.propTypes = {
  onSetPage: PropTypes.func,
  onSetFilter: PropTypes.func,
}

export default Navmenu;