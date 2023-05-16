import {Fragment, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApiTest from "./ApiTest";

function App() {
    const [count, setCount] = useState(0)

    return (
        <Fragment>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Colorium</h1>
            <div style={{border: "1px solid white", borderRadius:"1svmin", padding: "1svmin"}}>
                <ApiTest/>
            </div>
        </Fragment>
    )
}

export default App
