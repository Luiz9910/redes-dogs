import React, { useContext } from 'react'
import UserHeader from './UserHeader/UserHeader'
import { Route, Routes } from 'react-router-dom'
import Feed from '../components/pages/Feed/Feed'
import UserPhotoPost from './UserPhotoPost/UserPhotoPost'
import UserStats from './UserStats'
import { UserContext } from '../Context/UserContext'
import NotFound from '../components/NotFound'

const User = () => {
  const {data} = useContext(UserContext)

  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={data.id}/>}/>
        <Route path='postar' element={<UserPhotoPost />}/>
        <Route path='estatisticas' element={<UserStats />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </section>
  )
}

export default User
