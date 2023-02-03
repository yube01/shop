import React from 'react'
import { useSelector } from 'react-redux'

const Components = () => {


    const products = useSelector((state)=>state.allProducts.products);
    const render = products.map((product)=>{
      const { id, title, image, price, category } = product;
      return(
        <div className="components" key={id} >
          <div className="linkCard">

          <div className="card">
            <div className="image">
            <img src={image} alt={title}/>

            </div>
            <div className="content">
              <div className="header"> {title} </div>
              <div className="price"> ${price} </div>
              <div className="category"> {category} </div>
            </div>
        

          </div>

          </div>
         
        </div>
      )




    })
    

  return (
    <div>
        {render}
    </div>
  )
}

export default Components