
import Item from '../Item/Item'
import React from 'react'

export const ItemList = ({data = []}) => {
  return (
  
    data.map(mueble=> <Item key={mueble.id} info={mueble } />)
  );
};
