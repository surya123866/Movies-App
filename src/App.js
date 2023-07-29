import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import './App.css'
import Login from './components/LoginPage'
import Account from './components/Account'
import PopularPage from './components/PopularPage'
import SearchInput from './components/SearchInput'
import HomePage from './components/HomePage'
import NotFound from './components/PageNotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/searchInput" component={SearchInput} />
      <Route exact path="/popular" component={PopularPage} />
      <Route exact path="/account" component={Account} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
export default App
