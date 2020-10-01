import React from 'react'
import {render} from 'react-dom'
import './style.css'
import './babel'


console.log("hello!");

const App = () => (
    <div className="container">
        <h1>userDataApp</h1>
    </div> 
) 

render(<App/>, document.getElementById('app'))