import {Route, Switch} from 'react-router-dom'

import MatchDetails from './components/TeamCard'

import NotFound from './components/NotFound'

import './App.css'

import Home from './components/Home'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/team-matches/:id" component={MatchDetails} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
