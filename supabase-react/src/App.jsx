import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import './App.css'

// import Auth from './Auth'
// import Account from './Account'

import { AuthProvider } from './contexts/_Auth'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Signup } from './examples/Signup'
import { Login } from './examples/Login'
import { Dashboard } from './examples/Dashboard'
import { PrivateRoute } from './components/PrivateRoute'

import {Profile} from "./pages/Profile"
import {Todo} from "./pages/Todo"


import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';

function App() {
  // const [session, setSession] = useState(null)

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session)
  //   })

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })
  // }, [])

  return (
    // <div className="container" style={{ padding: '50px 0 100px 0' }}>
    // {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    // </div >
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/todo" component={Todo} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App