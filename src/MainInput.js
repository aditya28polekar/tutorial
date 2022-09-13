import React from 'react'

const MainInput = ({setName}) => {
  return (
    <>
    <input 
    style={{padding:10,
        margin:10
    }}
    placeholder="Enter Your Name" onChange={(e)=>{
      setName(e.target.value);      
    }}></input>      
    </>
  )
}

export default MainInput
