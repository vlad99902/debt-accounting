import React, { useState } from 'react'

//styles
import "../styles/Input.sass"

export const Input = ({ type = 'num' }) => {

  const [value, setValue] = useState('')

  let ph = ['Debt']

  if (type === 'text') ph = 'Name'
  if (type === 'num') ph = 'Debt'

  return (
    <>
      <input
        type='text'
        className='input'
        placeholder={ph}
        value={value}
        onChange={event => setValue(event.target.value)}
        size="10"
      />
    </>
  )
}