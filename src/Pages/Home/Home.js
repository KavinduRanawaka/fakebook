import React from 'react'
import NavBar from '../../Components/Navigation/NavBar'
import LeftPane from '../../Components/LeftPane/LeftPane'
import RightPane from '../../Components/RightPane/RightPane'
import PostPane from '../../Components/PostPane/PostPane'
import "./Home.css";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <div className="bottomContainer">
        <LeftPane/>
        <PostPane/>
        <RightPane/>
      </div>
    </div>
  )
}
