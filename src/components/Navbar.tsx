import React from 'react'
import tw from 'tailwind-styled-components'

export default function Navbar() {
    const MenuIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  return (
    <Nav>
        <Navhead>Posty</Navhead>
        <MenuButton>{MenuIcon}</MenuButton>
    </Nav>
  )
}

const Navhead = tw.h1`
    text-xl
    flex-1
`

const MenuButton = tw.button`
    
`

const Nav = tw.nav`
    bg-teal-700
    text-white
    p-4
    flex
`