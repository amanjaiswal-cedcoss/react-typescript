import React from 'react'

interface Iprops {
    id: number,
    title: string,
    price: number,
    rating: number,
    images: string[]
  }

const Product = (props:Iprops) => {
  return (
    <div>
        <h2>{props.title}</h2>
        <span>{props.id} {props.price} {props.rating}</span>
        {props.images.map(ele=>{return <img src={ele} alt='product images'/>})}
    </div>
  )
}

export default Product