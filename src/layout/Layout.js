import React from 'react'
import Lheader from './Lheader'
import Lnavbar from './Lnavbar'
import Main_page from './Main_page'
import Lfooter from './Lfooter'

function Layout() {
  return (
    <div>
        <Lheader/>
        <Lnavbar/>
        <Main_page/>
        <Lfooter/>
    </div>
  )
}

export default Layout