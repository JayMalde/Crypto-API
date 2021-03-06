import React from "react"
import Signup from "././Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "././contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard1 from "././Dashboard1"
import Login from "././Login"
import Navbar from "././Navbar"
import PrivateRoute from "././PrivateRoute"
import ForgotPassword from "././ForgotPassword"
import UpdateProfile from "././UpdateProfile"

function App() {
  return (
    <Container
      className="align-items-center justify-content-center"
    >
      {/* <Navbar/> */}
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard1} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App