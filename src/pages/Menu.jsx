import React from 'react'
import { Menulist } from '../COMPONENTS/MenuList'
import MenuItem from '../COMPONENTS/MenuItem'
import '../STYLES/Menu.css'

export default function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Order now</h1>
        <div className='menuList'>{Menulist.map((menuItem, key)=>{
                return( <div>
                <MenuItem key={key}
                    image={menuItem.Image} 
                    name={menuItem.name} 
                    price={menuItem.price}/>
                </div>
                )
            })}</div>
    </div>
  )
}
