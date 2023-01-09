import React from 'react'
import StickyNavbar from '../components/StickyNavBar'
import BecomeProvider from './BecomeProvider'

const setup = [
    {page: <BecomeProvider />}
]

export default function CreateSpaceInitial() {
  return (
    <div>
        {setup[0].page}

        <StickyNavbar name={'Next'} />
    </div>
  )
}
