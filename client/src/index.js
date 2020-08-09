import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Weather from './components/weather'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/weather' component={Weather} />
    </Switch>
  </Router>
)
ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.unregister()
