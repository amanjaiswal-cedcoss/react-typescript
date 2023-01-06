import React from 'react'

interface Iprops{
    name:string,
    num:number,
    isLoggedIn:boolean
}

const MyComponent = (props:Iprops) => {
  return (
    <div>
        <h1>Name - {props.name}</h1>
        <h3>Num = {props.num}</h3>
        <h4>{props.isLoggedIn ? 'Loggen In':'Logged Out'}</h4>
    </div>
  )
}

export default MyComponent