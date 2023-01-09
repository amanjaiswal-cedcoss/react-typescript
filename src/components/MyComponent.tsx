import React from 'react'

interface Iprops{
    name:string,
    num:number,
    isLoggedIn:boolean
}

const MyComponent = (props:Iprops) => {
  return (
    <div className='card'>
        <h2>Name - {props.name}</h2>
        <h4>Num = {props.num}</h4>
        <h5>{props.isLoggedIn ? 'Loggen In':'Logged Out'}</h5>
    </div>
  )
}

export default MyComponent