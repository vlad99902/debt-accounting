import React from 'react'

// Styles
import "../styles//Button.sass"

//components

export const Button = ({ text = "default" }) => {
  return (
    <>
      <div className="button">{text}</div>
    </>
  )
}