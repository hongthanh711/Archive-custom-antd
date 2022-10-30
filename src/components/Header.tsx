import React from 'react'
import { Button } from './atoms'

const Header = () => {
  return (
    <div>
        <Button variant='primary' width={300} onClick={() => alert('hello ')}>
            Header
        </Button>
    </div>
  )
}

export default Header