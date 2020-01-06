/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React, { Component, Fragment } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import NoRouteMatch from './pages/404'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import MainNavbar from './components/MainNavbar'
import IPADashboard from './pages/users/dashboard'
import IPAMainNavbar from './usersComponents/MainNavbar'
import 'semantic-ui-css/semantic.min.css'
import './stylesheets/main.scss'
import IPALogin from './pages/users/login'

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          {/* <Header /> */}

          <Switch>
            <Route
              exact
              path={'/dashboard'}
              render={() => {
                return (
                  <Fragment>
                    <MainNavbar />
                    <Route path="/dashboard" component={Dashboard} />
                  </Fragment>
                )
              }}
            />
            <Route
              exact
              path={'/ipa-dashboard'}
              render={() => {
                return (
                  <Fragment>
                    <IPAMainNavbar />
                    <Route path="/ipa-dashboard" component={IPADashboard} />
                  </Fragment>
                )
              }}
            />
            <Route exact path="/" component={Login} />
            <Route exact path="/ipa-login" component={IPALogin} />
            <Route component={NoRouteMatch} />
          </Switch>

          {/* <Footer /> */}
        </div>
      </HashRouter>
    )
  }
}

export default hot(module)(App)
