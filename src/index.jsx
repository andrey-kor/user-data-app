import React from 'react'
import {render} from 'react-dom'
import './style.css'

import AddSearchBlock from './components/AddSearchBlock.jsx'
import TableBlock from './components/TableBlock.jsx'
import InfoElementBlock from './components/InfoElementBlock.jsx'
import AddItemBlock from './components/AddItemBlock.jsx'

const App = () => (
    <div className="container">
        <div className="wrapper">
            <h1>User-Data App</h1>
            <AddSearchBlock/>
            <TableBlock/>
            <InfoElementBlock/>
            <AddItemBlock/>
        </div>
    </div> 
) 

render(<App/>, document.getElementById('app'))