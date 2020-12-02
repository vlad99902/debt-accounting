import React, { useState } from 'react'

//styles
import "../styles/Input.sass"

//components
import Debt from '../store/Debt'
import { observer } from 'mobx-react-lite'

export const Input = observer(({ type = 'num' }) => {

  //const [value, setValue] = useState('')

  let ph = ['Debt']

  if (type === 'text') ph = 'Name'
  if (type === 'num') ph = 'Debt'

  return (
    <>
      <input
        type='text'
        className='input'
        placeholder={ph}
        value={Debt.inputValue}
        onChange={event => Debt.setInputValue(event.target.value)}
        size="10"
      />
    </>
  )
})