import React,{useState,} from 'react';
import './styleItemDetail.css';

import ItemCount from '../ItemCount/ItemCount';

import {Link} from 'react-router-dom'


export const ItemDetail = ({data}) => {

    const [goToCart,setGoToCart] = useState(false);


    const onAdd = (quantity) => {
        setGoToCart(true);
        
      }
  
  
    return (

    <div className='container'>
        <div className='detail'>
            <img className=' detail_img' src={data.image} alt='' />
            <div className="content">
                <h1>{data.titulo}</h1>
                <p>{data.category}</p>
                {
                    goToCart
                    ?
                    <Link to='/cart'>Terminar compra</Link>
                    : <ItemCount initial ={1} stock={5} onAdd={onAdd}/>
                }
            </div>
        </div>
    </div>


  
  )
}
