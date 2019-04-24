import React from 'react'
import { Menu } from '../Menu';

export const Template = (props) => (
  <div className = 'page'>
    <Menu></Menu>
    {props.children}
  </div>
)