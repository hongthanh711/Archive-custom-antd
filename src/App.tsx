import React from 'react'
import './App.css'
import Button from './components/atoms/Button'
import Search from './components/atoms/search'
import Header from './components/Header'

function App() {
    return (
        <div>
            {/* <Button variant="outline-primary" loading>
                Button
            </Button>
            <Header /> */}
            <Search variant="primary" placehoder="What service you are looking for" />
        </div>
    )
}

export default App
