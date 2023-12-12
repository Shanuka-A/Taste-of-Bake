import React ,{useState , useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllCakes} from '../actions/cakeActions'
import Cake from '../Components/Cake';
import cakes from '../cakedata';


export default function HomePg() {
  const dispatch=useDispatch
 

  return (
    <div>
      
      <div className='row'>
        []
        {cakes.map((cake) => {
          return (
            <div className='col-md-4' key={cake.id}>
              <div>
                <Cake cake={cake} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
