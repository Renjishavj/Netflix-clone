import React from 'react'
import {action,originals,horror,trending, comedy,romantic, documentries} from "./Url"
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
     <RowPost url={trending} title='Netflix Trendings'/>
     <RowPost url={action} title='Action Movies' isSmall/>
     <RowPost url={romantic} title='Romantic Movies' isSmall/>
     <RowPost url={horror} title='Horror Movies' isSmall/>
     <RowPost url={comedy} title='Comedy Movies' isSmall/>
     <RowPost url={documentries} title='Documentries' isSmall/>
    </div>
  )
}

export default App
