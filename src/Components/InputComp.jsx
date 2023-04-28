import React from 'react'
import { useState } from 'react'
import myStore from '../Redux/Store'
function InputComp() {

    const[state,setState] = useState(" ")

    const callDispatch = ()=>{
        myStore.dispatch({
            type:"name",
            userName: state,
        })
    }
  return (
    <div>
     
     <h3>redux Input Comp</h3>
     <input type='text' onChange={(e)=>{setState(e.target.value)}} />
     <button onClick={callDispatch} >submit</button>

    </div>
  )
}

export default InputComp