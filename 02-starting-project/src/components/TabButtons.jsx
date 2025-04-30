import React from 'react'

const TabButtons = ({children, onSelect , isSelected}) => {
    console.log("Tab elements");
  return (
    <li><button className={isSelected ? 'active' : ''} onClick={onSelect}>{ children}</button></li>
  )
}

export default TabButtons