import React from 'react';
import Cake from '../Components/Cake';
import cakes from '../cakedata';

export default function HomePg() {
  return (
    <div>
      <div className='row'>
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
