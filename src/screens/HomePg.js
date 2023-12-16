import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCakes } from '../actions/cakeActions';
import Cake from '../Components/Cake';
import cakes from '../cakedata';

export default function HomePg() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch cakes data from Redux store or API using useEffect
  useEffect(() => {
    // Dispatch the action to get all cakes (you should replace this with your actual action)
    dispatch(getAllCakes());
  }, [dispatch]);

  // Filter cakes based on the search term
  const filteredCakes = cakes.filter((cake) =>
    cake.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Rounded Search bar */}
      <div className="mb-3 d-flex justify-content-center">
        <input
          type="text"
          className="form-control rounded w-25 bg-light border-primary"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Display filtered cakes */}
      <div className='row'>
        {filteredCakes.map((cake) => (
          <div className='col-md-4' key={cake.id}>
            <div>
              <Cake cake={cake} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
