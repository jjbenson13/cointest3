import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CoinDetailPage from './pages/CoinDetailPage'
import CoinSummaryPage from './pages/CoinSummaryPage'
import './App.css'
import { WatchListContextProvider } from './context/WatchListContext'

const App = () => {
  return (
    <div>
      <WatchListContextProvider>
        <BrowserRouter>
          <Route exact path='/' component={CoinSummaryPage} />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  )
}

export default App