import React, { Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../Header'
import AppRouter from '../AppRouter'
import GlobalStyle from '../../style/GlobalStyle'

export default function App() {
    return (
        <Fragment>
            <Router>
                <GlobalStyle />
                <Header />
                <AppRouter />
            </Router>
        </Fragment>
    )
}
