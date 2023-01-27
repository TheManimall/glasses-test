import React, { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './App.scss';

import Navmenu from './components/Navmenu';
import Filter from './components/Filter';
import AppRoutes from './components/routes';

const App = () => {
  const [filter, setFilter] = useState([]);
  const [page, setPage] = useState(1)

  const navigate = useNavigate()

  useEffect(() => {
    navigate('spectacles-women')
  }, [])

  const handleSelectFilter = useCallback(item => {
    if (filter.includes(item)) {
      setFilter(prevState => prevState.filter(el => el !== item))
    } else {
      setFilter(prevState => [...prevState, item])
    }

    setPage(1)
  }, [filter])

  return (
    <div className="App">
      <section className="menu-container">
        <Navmenu 
          onSetPage={setPage} 
          onSetFilter={setFilter}
        />
      </section>
      <section className="filter-container">
        <Filter
          onFilter={handleSelectFilter}
          filter={filter}
        />
      </section>
      <main className="main-container">
        <AppRoutes 
          filter={filter} 
          onSetPage={setPage}
          page={page} 
        />
      </main>
    </div>
)};

export default App;
