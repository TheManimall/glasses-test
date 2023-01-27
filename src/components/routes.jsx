import React from 'react'
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types'

import Glasses from './Glasses';

const AppRoutes = ({ filter, onSetPage, page }) => (
  <Routes>
    <Route path='sunglasses-men' element={<Glasses filter={filter} onSetPage={onSetPage} page={page} />} />
    <Route path='sunglasses-women' element={<Glasses filter={filter} onSetPage={onSetPage} page={page} />} />
    <Route path='spectacles-men' element={<Glasses filter={filter} onSetPage={onSetPage} page={page} />} />
    <Route path='spectacles-women' element={<Glasses filter={filter} onSetPage={onSetPage} page={page} />} />
  </Routes>
)

AppRoutes.propTypes = {
  filter: PropTypes.array,
  onSetPage: PropTypes.func,
  page: PropTypes.number,
}

export default AppRoutes;