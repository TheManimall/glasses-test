import React, { useEffect, useState, useCallback, useRef } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'

import GlassesItem from './GlassesItem'

import { getAndTransformDataFromAPI, buildFilterLinkForAPI } from '../../helpers/helpers'

const Glasses = ({ filter, page, onSetPage }) => {
  const [glasses, setGlasses] = useState([]);
  const [load, setLoad] = useState(false);

  const glassesRef = useRef()

  const { pathname } = useLocation()

  // GET DATA BY FILTER && PATHNAME 
  useEffect(() => {
    axios.get(buildFilterLinkForAPI(pathname, page, filter))
      .then(result => setGlasses(getAndTransformDataFromAPI(result.data.glasses)))
      .then(() => {
        setLoad(false)
        onSetPage(2)
      })
      .catch(e => console.warn('error', e))
  }, [pathname, filter])

  // GET DATA BY INFINITY SCROLL
  useEffect(() => {
    if (load) {
      axios.get(buildFilterLinkForAPI(pathname, page, filter))
      .then(result => setGlasses(prevState => ([...prevState, ...getAndTransformDataFromAPI(result.data.glasses)])))
      .then(() => {
        setLoad(false)
        onSetPage(prevState => prevState + 1)
      })
      .catch(e => console.warn('error', e))
    }
  }, [load])

  // HANDLE INFINITY SCROLL
  const handleScroll = useCallback(() => {
    if ((window.pageYOffset + window.innerHeight) >= (document.body.offsetHeight - 999)) {
      setLoad(true)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <div className='glasses' ref={glassesRef}>
      {glasses.map(item => (
        <GlassesItem
          key={item.id}
          name={item.name}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  )
}

Glasses.propTypes = {
  filter: PropTypes.array,
  page: PropTypes.number,
  onSetPage: PropTypes.func,
}

export default Glasses;