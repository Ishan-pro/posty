
import React, { ChangeEventHandler, SyntheticEvent, useState } from 'react'

import {useAppDispatch, useAppSelector} from '../app/hooks'
import tw from 'tailwind-styled-components'
import Navbar from './Navbar'
import Chatbox from './Chatbox'

function App() {
  const dispatch = useAppDispatch()
  const [text, setText] = useState<string>(' ')

  const handlePostChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  return (
       <>
         <Container style={{height:"100vh"}}>
          <Navbar/>
          <Chatbox/>
         </Container>
       </>
       
  )
}

const Container = tw.div`
  flex
  flex-col
`

export default App
