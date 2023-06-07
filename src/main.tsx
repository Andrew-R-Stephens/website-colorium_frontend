import React, {Fragment} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.sass'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Fragment>
        {/*<React.StrictMode>*/}
            <App />
        {/*</React.StrictMode>,*/}
    </Fragment>
)
