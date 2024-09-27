import React from 'react'
import "./LeftPane.css"
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
      <div className="leftPaneContainer">
        <div className="leftPaneMenu">
          <li className="leftPaneMenuItem">
              <MarkUnreadChatAltIcon className="LeftPaneMenuIcon"/>
              <span className="leftPaneMenuText">Message</span>
          </li>
          <li className="leftPaneMenuItem">
              <GroupIcon className="LeftPaneMenuIcon"/>
              <span className="leftPaneMenuText">Groups</span>
          </li>
          <li className="leftPaneMenuItem">
              <RssFeedIcon className="Feed"/>
              <span className="leftPaneMenuText">Feed</span>
          </li>
          <li className="leftPaneMenuItem">
              <FlagIcon className="LeftPaneMenuIcon"/>
              <span className="leftPaneMenuText">Pages</span>
          </li>
          <li className="leftPaneMenuItem">
              <CalendarMonthIcon className="LeftPaneMenuIcon"/>
              <span className="leftPaneMenuText">Event</span>
          </li>
          <li className="leftPaneMenuItem">
              <NewspaperIcon className="LeftPaneMenuIcon"/>
              <span className="leftPaneMenuText">News</span>
          </li>
          <li className="leftPaneMenuItem">
              <BuildIcon className="LeftPaneMenuIcon"/>
              <span className="leftPaneMenuText">Setting</span>
          </li>
          <li className="leftPaneMenuItem">
              <SportsEsportsIcon className="LeftPaneMenuIcon"/>
              <span className="leftPaneMenuText">Games</span>
          </li>
          <li className="leftPaneMenuItem">
              <WorkOutlineIcon className="LeftPaneMenuIcon"/>
              <span className="leftPaneMenuText">Jobs</span>
          </li>
          <li className="leftPaneMenuItem">
              <AddShoppingCartIcon className="LeftPaneMenuIcon"/>
              <span className="leftPaneMenuText">Market</span>
          </li>
          <hr/>

          <div className="pagesYouLiked">
            <h3>Pages You Liked</h3>
          </div>
          
          <div className="pageList">
          <li className="pageListItem">
          <img src="/images/img2.JPG" alt="" className="pagepic" />
          <span className="pageName">Code with KNR</span>
          </li>
          <li className="pageListItem">
          <img src="/images/img2.JPG" alt="" className="pagepic" />
          <span className="pageName">Code with KNR</span>
          </li>
          <li className="pageListItem">
          <img src="/images/img2.JPG" alt="" className="pagepic" />
          <span className="pageName">Code with KNR</span>
          </li>
          <li className="pageListItem">
          <img src="/images/img2.JPG" alt="" className="pagepic" />
          <span className="pageName">Code with KNR</span>
          </li>
          <li className="pageListItem">
          <img src="/images/img2.JPG" alt="" className="pagepic" />
          <span className="pageName">Code with KNR</span>
          </li>
          <li className="pageListItem">
          <img src="/images/img2.JPG" alt="" className="pagepic" />
          <span className="pageName">Code with KNR</span>
          </li>
          <li className="pageListItem">
          <img src="/images/img2.JPG" alt="" className="pagepic" />
          <span className="pageName">Code with KNR</span>
          </li>
          <li className="pageListItem">
          <img src="/images/img2.JPG" alt="" className="pagepic" />
          <span className="pageName">Code with KNR</span>
          </li>
          </div>
          
        </div>
      </div>
    </div>
  )
}
