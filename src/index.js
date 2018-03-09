import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles.css'  // my CSS sheet


// ReactDOM.render(
//     <Router>
//         <App/>
//     </Router>,
//     document.getElementById('root'))
    function tick() {
        ReactDOM.render(<App date={new Date()}/>, document.getElementById('root')
        );
    }
    setInterval(tick, 1000);