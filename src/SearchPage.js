import React from 'react'
import "./SearchPage.css"
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow";
import TuneIcon from '@mui/icons-material/Tune';
import profile from "./images/learnenglish.jpg";
import img from "./images/channelimage1.png"
import img2 from "./images/channelimage2.png";
import img3 from "./images/channelimage3.png";
import img4 from "./images/channelimage4.png";


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>filter</h2>
            </div>
            <hr />

            <ChannelRow
             image = {profile}
             Channel ="English Easy Practice"
             verified 
             subs ="200k"
             noOfVideos={356} 
             description="English Easy Practice course is a very useful video collection for people who want to learn English vocabulary and improve their English speaking skills by listening to daily conversations. 
"
             />
             <hr />
             <VideoRow
             views="145k"
             subs="659k"
             description="In this video, you will practice English speaking and listening with a fun daily conversation! 🎉"
             timestamp="59 seconds ago"
             Channel ="English Easy Practice"
             title="English Speaking Practice for Daily Use | Conversation to Improve English Skills✌️"
             image={img}
             
             />
             <VideoRow
             views="1M"
             subs="659k"
             description="Welcome to our video, Best Way to Improve English Communication Skills – Shadowing English Speaking Practice! 🎉📚"
             timestamp="2 hrs ago"
             Channel ="English Easy Practice"
             title="Best Way to Improve English Communication Skills | Shadowing English Speaking Practice"
             image={img2}
             
             />
              
              <VideoRow
             views="113k"
             subs="659k"
             description="Do you want to boost your English fluency? In this video, you will practice English listening and speaking skills step by step. 🗣️ Watch this video many times to master the vocabulary and expressions."
             timestamp="2 days ago"
             Channel ="English Easy Practice"
             title="Boost Your English Fluency with Listening and Speaking Exercises | English Conversation Practice"
             image={img3}
             
             />
              <VideoRow
             views="145k"
             subs="659k"
             description="In this video, you will practice English speaking and listening with a fun daily conversation! 🎉"
             timestamp="59 seconds ago"
             Channel ="English Easy Practice"
             title="English Speaking Practice for Daily Use | Conversation to Improve English Skills✌️"
             image={img4}
             
             />
        </div>
    )
}

export default SearchPage 
