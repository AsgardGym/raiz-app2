import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const muebles =[
  {  id:1, image:"https://f.fcdn.app/imgs/08e927/www.nyr.com.uy/nyruy/4f47/webp/catalogo/MB-RACK-HAPPY-GR_RC-OW_1/2000-2000/rack-happy-185-roble-claro-y-off-white.jpg", titulo:"Rack Happy", categoria:"dormitorio"},
  { id: 2, image:"https://f.fcdn.app/imgs/ef0eb6/www.nyr.com.uy/nyruy/9f7e/webp/catalogo/SF-CRONUS-RUS-2C_1057_1/2000-2000/sofa-cronus-tela-rustica-2-cuerpos-1057-gris.jpg", titulo:"Sofa Cronus", categoria:"living"},
  {id: 3, image:"https://f.fcdn.app/imgs/d7cb6d/www.nyr.com.uy/nyruy/0ed0/webp/catalogo/MB-ROPERO-HAPPY-2P_RC-OW_1/2000-2000/ropero-happy-2-puertas-roble-claro-y-off-white.jpg",titulo:"Ropero claro", categoria:"dormitorio"},
  {id: 4, image:"https://f.fcdn.app/imgs/1a8ffe/www.nyr.com.uy/nyruy/5900/webp/catalogo/MB-MESACENTRO-VIP_FR-OW_1/460x460/mesa-de-centro-vip-freijo-y-off-white.jpg",titulo:"mesa centro vip", categoria:"living"},
  ]
export default function ItemDetaContainer() {

  const [data,setData] = useState({});
const {detalleId} = useParams();

  useEffect(()=> {
    const getData = new Promise( resolve =>{
        setTimeout(() => {
        resolve(muebles);
    }, 1000);
  });

  getData.then(res => setData(res.find(mueble => mueble.id === parseInt(detalleId))));

},[])
  return (
    <>
   <ItemDetail data={data}/>
    </>
  )
}
