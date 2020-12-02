import React from 'react'

// Styles
import "../styles/Button.sass"

//components
import Debt from '../store/Debt'

export const Button = ({ text = "default", type = 'should' }) => {

  const newDebt = () => {
    type === 'owe'
      ? Debt.addOwe({
        id: 1,
        title: Debt.inputTitle,
        sum: Debt.inputSum,
        completed: false
      })
      : Debt.addShould({
        id: 1,
        title: Debt.inputTitle,
        sum: Debt.inputSum,
        completed: false
      })
  }
  return (
    <>
      <div
        className="button"
        onClick={() => {
          newDebt()
        }}
      >
        {text}</div>
    </>
  )
}