import React from 'react'

// Styles
import "../styles/Button.sass"

//components
import DebtStore from '../store/DebtStore'

export const Button = ({ text = "default" }) => {



  return (
    <>
      <div
        className="button"
        onClick={() => {
          DebtStore.store.value = DebtStore.inputValue
          //console.log(DebtStore.store.value);
        }}
      >
        {text}</div>
    </>
  )
}