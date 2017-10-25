import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Assessment from '../assessment'

const App = () => (
  <div>
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>                        
        </button>
          <Link className="navbar-brand" to="/">Home</Link>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li><Link className="active" to="/assessment">Assessment</Link></li>
          </ul>
        </div>
      </div>
    </nav>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/assessment" component={Assessment} />
    </main>
  </div>
)

export default App