import React from 'react'
import tw from 'tailwind-styled-components'

export default function Chatbox() {
  return (
    <ChatBin>

        <Input type="text" placeholder='Write your heart' />
    </ChatBin>

  )
}

const Input = tw.input`
    bg-slate-700
    rounded
    p-2
    text-white
`

const ChatBin = tw.div`
    bg-blue-500
    flex-1
`

