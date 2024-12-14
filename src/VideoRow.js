import React from 'react'
// import image from "./images/channelimage1.png"
import './VideoRow.css';
function VideoRow({ views, subs, description, timestamp, Channel, title, image }) {
    return (
        <div className="VideoRow">
            <img className="videoCard_thumbnail" src={image} alt="" />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">{Channel} •
                    <span className="videoRow__subs">
                    <span className="videoRow__subNumber">{subs}</span>   Subscribers

                    </span>{" "}
                      {views} views •  {timestamp}</p>
                <p className="videoRow__description">{description}</p>
            </div>
        </div>
        
    )
}

export default VideoRow
