import React from 'react'
import "./Button.scss"

const Button = ({ children, className, ...restProps }) => {
  return (
    <button className={`${className} button `} {...restProps}>
    {children}
  </button>
  )
}

export default Button