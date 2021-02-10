import React from 'react'

const Button = ({ active, reversed, ...props }) => {
  return (
    <span
      {...props}
      style = {{
        cursor:'pointer', 
        color: `${ reversed ? active ? 'white' : '#aaa' : active ? 'black' : '#ccc'}`
      }}
    />
  )
}

export default Button
