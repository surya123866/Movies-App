import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Account from './components/Account'
import PopularPage from './components/PopularPage'
import SearchInput from './components/SearchInput'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'
import MovieItemDetailsView from './components/MovieItemDetailsView'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={HomePage} />
      <ProtectedRoute exact path="/account" component={Account} />
      <ProtectedRoute exact path="/search" component={SearchInput} />
      <ProtectedRoute exact path="/popular" component={PopularPage} />
      <ProtectedRoute
        exact
        path="/movies/:id"
        component={MovieItemDetailsView}
      />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
export default App
