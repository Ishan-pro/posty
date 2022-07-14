
import React, { ChangeEventHandler, SyntheticEvent, useState } from 'react'

import {useAppDispatch, useAppSelector} from '../app/hooks'
import { useGetPhotobyIdQuery } from '../features/photos'
import tw from 'tailwind-styled-components'
import Navbar from './Navbar'

function App() {
  const dispatch = useAppDispatch()
  const [text, setText] = useState<string>(' ')
  useGetPhotobyIdQuery(text)

  const handlePostChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  return (
       <>
         <Navbar/>
       </>
       
  )
}

const Hello = tw.div`
  bg-slate-700
`

export default App
