import React from 'react'
import "./index.css" 
function A( props) {
  return (
    <div className="container">
     <h1 > A组件 {props.title} </h1>
    </div>
  )
}

export default A