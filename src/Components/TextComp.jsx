import { useSelector } from 'react-redux'

import React from 'react'

function TextComp() {
   const data = useSelector((storedata)=>{
        return storedata
    })
  return (
    <div>
        <h2>Text Comp</h2>
        <p>{data.name}</p>
    </div>
  )
}

export default TextComp