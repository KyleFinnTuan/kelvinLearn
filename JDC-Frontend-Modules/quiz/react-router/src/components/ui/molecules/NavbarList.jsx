import React from 'react'
import NavbarItem from '../atoms/NavbarItem'

const NavbarList = ({items}) => {
  return (
    <div className="flex gap-4">
      {items.map((item, index) => (
        <NavbarItem
            key={index}
            children={item.label}
            onClick={item.onClick}
            isActive={item.isActive}
        ></NavbarItem>
      ))}
    </div>
  )
}

export default NavbarList
