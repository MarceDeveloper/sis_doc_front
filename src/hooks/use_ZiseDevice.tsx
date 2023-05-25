import { useMediaQuery } from 'native-base'
import React from 'react'

export const use_ZiseDevice = () => {
    const[isMobile] = useMediaQuery({
        maxWidth:700
    })
  return {
    isMobile
  }
}
