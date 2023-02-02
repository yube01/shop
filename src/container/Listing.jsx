import React from 'react'
import { useSelector } from 'react-redux'
import Components from './Components';

const Listing = () => {


    
    const products = useSelector((state) => state);
    console.log(products)
  

  return (
    <div>
        <h2>
            ProductListings
            <Components/>
        </h2>
    </div>
  )
}

export default Listing