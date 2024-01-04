import { HStack } from '@chakra-ui/react'
import React from 'react'
import ColorSwitch from './ColorSwitch'

const Navbar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={12}>
      <ColorSwitch />
    </HStack>
  )
}

export default Navbar