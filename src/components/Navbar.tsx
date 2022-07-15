import React from 'react'
import tw from 'tailwind-styled-components'

export default function Navbar() {
    const MenuIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  return (
    <Nav>
        <Navhead>Posty</Navhead>
        <MenuItems>
            <li><a href="">Dashboard</a></li>
            <li><a href="">Dashboard</a></li>
            <li><a href="">Dashboard</a></li>
            <li><a href="">Dashboard</a></li>
        </MenuItems>
        <MenuButton>{MenuIcon}</MenuButton>
    </Nav>
  )
}

const MenuItems = tw.ul`
    hidden
    lg:grid
    lg:col-span-5
    lg:justify-end
    lg:list
    lg:grid-flow-col
    lg:gap-4
`

const Navhead = tw.h1`
    text-xl
    col-span-9
    lg:col-span-5
`

const MenuButton = tw.button`
    ripple-bg-transparent
    rounded
    lg:hidden
`

const Nav = tw.nav`
    bg-teal-700
    text-white
    p-4
    grid
    grid-cols-10
`