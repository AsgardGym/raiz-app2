import React from 'react';
import "./styleItem.css";
import { Link }  from 'react-router-dom';


export default function Item({ info }) {

  return (
    <>
    <Link to={`/detalle/${info.id}`} className='mueble'>
        <img src={info.image} alt='' />
        <p>{info.titulo}</p>
        <p>{info.categoria}</p>
    </Link>
    </>
  )
}
