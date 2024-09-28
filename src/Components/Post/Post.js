import React from 'react'
import "./Post.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Post() {
  return (
    <div className='post'>
      <div className="postContainer">
        <div className="postTop">
           <img src="/images/img1.jpg" alt="" className="postImage" />
           <span className="postUserName">Kavindu Ranawaka</span>
           <span className="postTime">5 mins ago</span>
        </div>
        <div className="postCenter">
          <div className="postCaption">
            Hellow I am Kavindu Ranawaka.
          </div>
          <img src="/images/img2.JPG" alt="" className="postedImage" />
        </div>
        <div className="postBottom">
           <div className="postBottomLeft">
             <ThumbUpIcon className="actionPic"/>
             <FavoriteIcon className="actionPic"/>
             <EmojiEmotionsIcon className="actionPic"/>

             <span className="likeCount">You and 212 other</span>
           </div>
           <div className="postBottomRight">
            <span className="commentCount">
                15 comments
            </span>
           </div>
        </div>
      </div>
    </div>
  )
}
