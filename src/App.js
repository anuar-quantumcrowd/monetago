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
import 'semantic-ui-css/semantic.min.css'
import './stylesheets/main.scss'

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
            <Route exact path="/" component={Login} />
            <Route component={NoRouteMatch} />
          </Switch>

          {/* <Footer /> */}
        </div>
      </HashRouter>
    )
  }
}

export default hot(module)(App)
