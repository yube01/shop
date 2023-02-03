import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Components from './Components';
import axios from 'axios';
import { useEffect } from 'react';
import {setProducts} from "../redux/action/productAction"


const Listing = () => {

  const dispatch = useDispatch();


  const fetch = async()=>{
    const response = await axios 
    .get("https://fakestoreapi.com/products")
    .catch((err) =>{
      console.log("err",err)
    })

    dispatch(setProducts(response.data))
    //console.log(response.data)

  }

  useEffect(()=>{
    fetch();
  },)
    
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