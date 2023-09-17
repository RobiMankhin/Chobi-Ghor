import React from 'react'
import { Instagram, Facebook, Twitter, LinkedIn } from '@material-ui/icons'
import "../STYLES/Footer.css"

export default function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagram/> <Facebook/> <Twitter/><LinkedIn/>
        </div>
        <h2> &copy;2023 JEkhaneShekhane.com </h2>
    </div>
  )
}
