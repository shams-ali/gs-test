import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Assessment from '../assessment'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/assessment">assessment</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/assessment" component={Assessment} />
    </main>
  </div>
)

export default App