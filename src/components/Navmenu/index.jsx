import React, { useState, useRef, useEffect, useCallback, Fragment } from 'react';
import clsx from 'clsx';

import MenuItem from './MenuItem';
import Submenu from './Submenu';

import { menuData } from './data';
    
const Navmenu = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  const [submenuToggle, setSubmenuToggle] = useState(false)

  const buttonRef = useRef()
  const menuRef = useRef()

  const handleOpenMenu = useCallback((e) => {
    setMenuToggle(true);
  }, [])

  const handleCloseMenu = useCallback((e) => {
    if (submenuToggle) return

    setMenuToggle(false);
  }, [submenuToggle])

  const handleOpenSubmenu = useCallback(() => {
    setSubmenuToggle(true);
    console.log('CLICK CLACK !!!!');
  }, [])

  const handleCloseSubmenu = useCallback(() => {
    setSubmenuToggle(false);
  }, [])

  useEffect(() => {
    buttonRef.current.addEventListener('mouseover', handleOpenMenu)
    menuRef.current.addEventListener('mouseleave', handleCloseMenu)
  }, [handleOpenMenu, handleCloseMenu])

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log('This will run after 1 second!')
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <nav className="navmenu">
      <div className={clsx('toggle-button', menuToggle && 'active')} ref={buttonRef}>Menu</div>
      <div className={clsx('slide-menu', menuToggle && 'active')} ref={menuRef}>
        {menuToggle && (
          <ul>
            {menuData.map(({ name, submenu, id }) => (
              <MenuItem 
                key={id} 
                name={name} 
                submenu={submenu}
                handleClick={handleOpenSubmenu} 
              />))
            }
          </ul>
        )}
      </div>
      <Submenu 
        toggle={submenuToggle}
        handleClose={handleCloseSubmenu} 
      />
    </nav>
  );
};

export default Navmenu;

//Libre Baskerville