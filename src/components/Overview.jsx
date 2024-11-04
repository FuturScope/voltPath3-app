import React from 'react'
import SearchBar from './SearchBar';
import Reservation from './Reservation';

const Overview = () => {
  return (
    <div>
      <div className='mb-4'>
        <SearchBar/>
      </div>
      <div>
        <Reservation/>
      </div>
    </div>
  )
}
  
export default Overview;