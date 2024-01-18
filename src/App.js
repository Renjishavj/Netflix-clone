import React from 'react'
import {action,originals,horror} from "./Url"
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import "./App.css"
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
     <RowPost url={originals} title='Netflix Originals'/>
     <RowPost url={action} title='Action Movies' isSmall/>
     <RowPost url={horror} title='Horror Movies' isSmall/>
    </div>
  )
}

export default App
