import React from 'react'
import Header from '../components/header/Header'
import Home from '../components/home/Home'
import { useSelector } from 'react-redux'
import { RootState } from '../app/services/reduxStore'
import Login from './Login'

const Main = () => {
  const userLoginStatus : boolean | undefined = useSelector((state:RootState) => state.user.loggedIn); 
  return (
    <div className=''>
    <Header/>
    {userLoginStatus ? <Home/> : <Login/>}
    </div>
  )
}

export default Main