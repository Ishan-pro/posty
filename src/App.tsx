
import React, { ChangeEventHandler, SyntheticEvent, useState } from 'react'
import './App.css'
import {useAppDispatch, useAppSelector} from './app/hooks'

function App() {
  const dispatch = useAppDispatch()
  const [text, setText] = useState<String>(' ')
  const [query, setquery] = useState('')

  const handlePostChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  return (
       <>
          <input type="text" onChange={handlePostChange}/>
       </>
       
  )
}

export default App
