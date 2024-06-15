import React from 'react'
import { BubblyLink } from 'react-bubbly-transitions'
import { ACCENT_COLOR } from '../Constants'

const CustomBubblyLink = ({children,to}) => {
  return (
    <BubblyLink to={to} colorStart={ACCENT_COLOR}>
        {children}
    </BubblyLink>
  )
}

export default CustomBubblyLink