import React, { useEffect, useState } from 'react';
import axios from 'axios';

import GlassesItem from './GlassesItem'

const Glasses = () => {
  const [glasses, setGlasses] = useState([]);
  
  useEffect(() => {
    axios.get('https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-women/glasses?page[limit]=12&page[number]=1')
      .then(result => setGlasses([...result.data.glasses.reduce((acc, item) => {
          return [
            ...acc, 
            { 
              id: item.id,
              name: item.name,
              configurationName: item.configuration_name,
              imageUrl: item.glass_variants[0].media[0].url
            }]
        }, [])]))
      .catch(e => console.warn('error', e))

      console.log('glasses', glasses);
  }, [])

  console.log('glasses', glasses);

  return (
    <div className='glasses'>
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

export default Glasses;