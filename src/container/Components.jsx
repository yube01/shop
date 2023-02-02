import React from 'react'
import { useSelector } from 'react-redux'

const Components = () => {


    const products = useSelector((state)=>state)
    console.log(products)

  return (
    <div>
        <h1>
            components
        </h1>
    </div>
  )
}

export default Components