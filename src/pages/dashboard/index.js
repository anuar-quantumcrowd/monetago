import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import IdleTimer from 'react-idle-timer'

import Account from './Account'
import Organization from './Organization'
import Sidebar from '../../components/Sidebar'
import CorporateIdentity2 from '../../components/CorporateIdentity2'

import { fetchApi, logout } from '../../redux'

const Dashboard = () => {
  let idleTimer = ''
  let ActiveTabComponent = Account
  const dispatch = useDispatch()
  const history = useHistory()
  const [activeComponent, setActiveComponent] = useState('Account')

  const onClickSidebar = e => {
    const navItem = e.currentTarget.firstChild.getAttribute('id')
    setActiveComponent(navItem)
  }

  if (activeComponent === 'Organization') {
    ActiveTabComponent = Organization
  } else if (activeComponent === 'Identity') {
    ActiveTabComponent = CorporateIdentity2
  } else {
    ActiveTabComponent = Account
  }

  const onAction = e => {
    console.log('User did something: ', e)
    console.log('Time Remaining: ', idleTimer.getRemainingTime())

    // If Idle Remaning Time is greater than expiration, refresh token before expires and use this.idleTimer.reset()
  }

  const onActive = e => {
    console.log('User is Active: ', e)
    // console.log('Time Remaining: ', idleTimer.getRemainingTime())
  }

  const onIdle = e => {
    console.log('User is Idle: ', e)
    // console.log('Last Active: ', idleTimer.getLastActiveTime())
    // Delete token and force user to logout
    // alert('USER IS IDLE')
    // logout(history)
  }

  const calculateTokenExpiration = epoch => {
    if (sessionStorage.getItem('accessToken')) {
      return Math.abs(new Date() - new Date(new Date(0).setUTCSeconds(epoch)))
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem('accessToken')) {
      dispatch(fetchApi())
    } else {
      history.push('/')
    }
  }, [])

  // setInterval(() => {
  //   dispatch(fetchApi())
  // }, 5000)

  return (
    <div className="dashboard">
      <IdleTimer
        ref={ref => {
          idleTimer = ref
        }}
        onActive={onActive}
        onIdle={onIdle}
        onAction={onAction}
        debounce={250}
        timeout={calculateTokenExpiration(
          sessionStorage.getItem('tokenExpiration')
        )}
      />

      <Sidebar
        activeComponent={activeComponent}
        onClickSidebar={onClickSidebar}
      />
      <div className="dashboard-content">
        <ActiveTabComponent />
      </div>
    </div>
  )
}

export default Dashboard
