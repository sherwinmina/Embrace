import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import List from './pages/List'
import Detail from './pages/ListDetail'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/detail" component={Detail} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
