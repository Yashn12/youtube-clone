// import React from 'react'
// import VideoCard from './VideoCard'
// import './RecommandedVideos.css'
// // import channelImage from './image/channelimage.png';
// import learnenglish from "./images/learnenglish.jpg"
// import img from "./images/channelimage1.png"
// import img2 from "./images/channelimage2.png";
// import img3 from "./images/channelimage3.png";
// import img4 from "./images/channelimage4.png";


// function RecommandedVideos() {
//   return (
//     <div className='recommandedVideos'>
//       <div className="boxRow">
//       <div className="box1">All</div>
//         <div className="box">Podacast</div>
//         <div className="box">Narendra Modi</div>
//         <div className="box">Arjit Singh</div>
//         <div className="box">News</div>
//         <div className="box">Sport</div>
//         <div className="box">Vocal Language</div>
//         <div className="box">Router</div>
//       </div>
//       <h2>Recommanded</h2>
//       <div className="recommandedVideos__videos">
// <VideoCard
// title="At the Hostel-Useful Learn English Lesson for Real Life"
// views="472k Views"
// timestamp="3 years ago"
// channelImage={learnenglish}
// channel="Sonny Sangha"
// image={img}
// />
// <VideoCard
// title="At the Hostel-Useful Learn English Lesson for Real Life"
// views="472k Views"
// timestamp="3 years ago"
// channelImage="https://thumbs.dreamstime.com/z/d-cartoon-business-professionals-meeting-desk-white-background-328185145.jpg"
// channel="Sonny Sangha"
// image={img2}
// />
// <VideoCard
// title="At the Hostel-Useful Learn English Lesson for Real Life"
// views="472k Views"
// timestamp="3 years ago"
// channelImage="https://thumbs.dreamstime.com/z/d-cartoon-business-professionals-meeting-desk-white-background-328185145.jpg"
// channel="Sonny Sangha"
// image={img3}
// />
// <VideoCard
// title="Learn English quickly with podcast | English learning Conversation "
// views="727k Views"
// timestamp="3 Month ago"
// channelImage={learnenglish}
// channel="English Podcast Zone"
// image={img4}
// />
// <VideoCard
// title="At the Hostel-Useful Learn English Lesson for Real Life"
// views="472k Views"
// timestamp="3 years ago"
// channelImage="https://thumbs.dreamstime.com/z/d-cartoon-business-professionals-meeting-desk-white-background-328185145.jpg"
// channel="Sonny Sangha"
// image={img2}
// />
// <VideoCard
// title="At the Hostel-Useful Learn English Lesson for Real Life"
// views="472k Views"
// timestamp="3 years ago"
// channelImage="https://thumbs.dreamstime.com/z/d-cartoon-business-professionals-meeting-desk-white-background-328185145.jpg"
// channel="Sonny Sangha"
// image={img3}
// />
// <VideoCard
// title="At the Hostel-Useful Learn English Lesson for Real Life"
// views="472k Views"
// timestamp="3 years ago"
// channelImage="https://thumbs.dreamstime.com/z/d-cartoon-business-professionals-meeting-desk-white-background-328185145.jpg"
// channel="Sonny Sangha"
// image={img}
// />
// <VideoCard
// title="At the Hostel-Useful Learn English Lesson for Real Life"
// views="472k Views"
// timestamp="3 years ago"
// channelImage="https://thumbs.dreamstime.com/z/d-cartoon-business-professionals-meeting-desk-white-background-328185145.jpg"
// channel="Sonny Sangha"
// image={img}
// />
// <VideoCard
// title="At the Hostel-Useful Learn English Lesson for Real Life"
// views="472k Views"
// timestamp="3 years ago"
// channelImage="https://thumbs.dreamstime.com/z/d-cartoon-business-professionals-meeting-desk-white-background-328185145.jpg"
// channel="Sonny Sangha"
// image={img}
// />


//       </div>
//     </div>
//   )
// }

// export default RecommandedVideos
import React, { useState } from 'react';
import VideoCard from './VideoCard';
import './RecommandedVideos.css';
// import channelImage from './image/channelimage.png';
import learnenglish from "./images/learnenglish.jpg";
import img from "./images/channelimage1.png";
import img2 from "./images/channelimage2.png";
// import img3 from "./images/channelimage3.png";
import img4 from "./images/channelimage4.png";
import img5 from "./images/channelimage5.png";
import img6 from "./images/channelimage6.png";
import img7 from "./images/channelimage7.png";
import img8 from "./images/channelimage8.png";
import img9 from "./images/channelimage9.png";
import img10 from "./images/channelimage10.png";
import img11 from "./images/channelimage11.png";
import img12 from "./images/channelimage12.png";
import img13 from "./images/channelimage13.png";
import img14 from "./images/channelimage14.png";
import img15 from "./images/channelimage15.png";


const allVideos = [
  { 
    title: "At theee Hostel-Useful Learn English Lesson for Real Life", 
    views: "472k Views", 
    timestamp: "3 years ago", 
    channelImage: learnenglish, 
    channel: "Sonny Sangha", 
    image: img,
    category: ["All"]
    
  },
  { 
    title: "#GujaratGiants win by one point over #UMumba! | #ProKabaddiOnStar HIGHLIGHTS", 
    views: "234k Views", 
    timestamp: "5 Hours ago", 
    channelImage: learnenglish, 
    channel: "Star Sports", 
    image: img14,
    category: ["All","Sport"]
  },
  { 
    title: "Mumbai Vs Baroda 1st Semi Final Full Highlights SMAT | Syed Mushtaq Ali Trophy 2024", 
    views: "47k Views", 
    timestamp: "1 hr Ago", 
    channelImage: learnenglish, 
    channel: "Arabain Stories", 
    image: img13,
    category: "Sport"
  },

  { 
    title: "LIVE - India vs Thailand, Women's Junior Hockey Asia Cup 2024", 
    views: "777k Views", 
    timestamp: "1 Month ago", 
    channelImage: learnenglish, 
    channel: "Star Sports", 
    image: img15,
    category: ["All","Sport"]
  },{ 
    title: "Packaged Food Deadly", 
    views: "1.3M Views", 
    timestamp: "11 Month ago", 
    channelImage: learnenglish, 
    channel: "Raj Sharmani", 
    image: img5,
    category: ["All","Podcast"]
  },
  { 
    title: "Dirty Reality Of Nutrients & Supplements Industry In India | Ft Mihir Gadani | FO 143 Raj Shamani", 
    views: "615k Views", 
    timestamp: "1 years ago", 
    channelImage: learnenglish, 
    channel: "Raj Sharmani", 
    image: img6,
    category: ["All","Podcast"]
  },
  { 
    title: "At the Hostel-Useful Learn English Lesson for Real Life", 
    views: "472k Views", 
    timestamp: "3 years ago", 
    channelImage: "https://thumbs.dreamstime.com/z/d-cartoon-business-professionals-meeting-desk-white-background-328185145.jpg", 
    channel: "Sonny Sangha", 
    image: img2,
    category: ["All","Podcast"]
  },
  { 
    title: "Learn English quickly with podcast | English learning Conversation", 
    views: "727k Views", 
    timestamp: "3 Month ago", 
    channelImage: learnenglish, 
    channel: "English Podcast Zone", 
    image: img4,
    category: ["Vocal Language"]
  },
  { 
    title: "PM Modi Exclusive Interview: देखिये PM Modi का Exclusive Interview | Rajat Sharma | India Tv", 
    views: "472k Views", 
    timestamp: "3 years ago", 
    channelImage: "https://thumbs.dreamstime.com/z/d-cartoon-business-professionals-meeting-desk-white-background-328185145.jpg", 
    channel: "Aap ki aadalt", 
    image: img7,
    category: "Narendra Modi"
  },
  { 
    title: "Best Of Arijit Singh | Arijit Singh Songs | Arijit Singh Hit Songs | Arijit Singh Jukebox Songs", 
    views: "472k Views", 
    timestamp: "2 Month ago", 
    channelImage: "https://thumbs.dreamstime.com/z/d-cartoon-business-professionals-meeting-desk-white-background-328185145.jpg", 
    channel: "Shraddha Vofi vibe", 
    image: img8,
    category: "Arjit Singh"
  },
  { 
    title: "Best Of Arjit Singh | Sad Songs | Heart Touching Songs | Arjit Singh", 
    views: "42k Views", 
    timestamp: "7 Days ago", 
    channelImage: "https://thumbs.dreamstime.com/z/d-cartoon-business-professionals-meeting-desk-white-background-328185145.jpg", 
    channel: "Soutiful Vibes", 
    image: img9,
    category: "Arjit Singh"
  },
  { 
    title: "President Emmanuel Macron names centrist François Bayrou as French PM | BBC News", 
    views: "42k Views", 
    timestamp: "5 Hours ago", 
    channelImage: "https://thumbs.dreamstime.com/z/d-cartoon-business-professionals-meeting-desk-white-background-328185145.jpg", 
    channel: "BBC NEWS", 
    image: img10,
    category: "News"
  },
  { 
    title: "ABC World News Tonight with David Muir Full Broadcast - Dec. 9, 2024", 
    views: "669k Views", 
    timestamp: "3 Days ago", 
    channelImage: "https://thumbs.dreamstime.com/z/d-cartoon-business-professionals-meeting-desk-white-background-328185145.jpg", 
    channel: "ABC NEWS", 
    image: img11,
    category: "News"
  },
  { 
    title: "Priyanka Chopra Jonas on body shaming, social media and pay parity - BBC World Service", 
    views: "1.1M Views", 
    timestamp: "12 Days ago", 
    channelImage: "https://thumbs.dreamstime.com/z/d-cartoon-business-professionals-meeting-desk-white-background-328185145.jpg", 
    channel: "BBC WorldNews", 
    image: img12,
    category: "News"
  }
  // Add other video data here with different categories...
];

function RecommandedVideos() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter videos based on selected category
  const filteredVideos = allVideos.filter(video => 
    selectedCategory === 'All' || 
    (Array.isArray(video.category) && video.category.includes(selectedCategory)) || 
    video.category === selectedCategory
  );
  

  return (
    <div className='recommandedVideos'>
        {/* <div className="boxRow">
          <div className="box1" onClick={() => setSelectedCategory('All')}>All</div>
          <div className="box" onClick={() => setSelectedCategory('Podcast')}>Podcast</div>
          <div className="box" onClick={() => setSelectedCategory('Narendra Modi')}>Narendra Modi</div>
          <div className="box" onClick={() => setSelectedCategory('Arjit Singh')}>Arjit Singh</div>
          <div className="box" onClick={() => setSelectedCategory('News')}>News</div>
          <div className="box" onClick={() => setSelectedCategory('Sport')}>Sport</div>
          <div className="box" onClick={() => setSelectedCategory('Vocal Language')}>Vocal Language</div>
          <div className="box" onClick={() => setSelectedCategory('Router')}>Router</div>
        </div> */}
        <div className="boxRow">
  <div
    className={`box ${selectedCategory === 'All' ? 'active' : ''}`}
    onClick={() => setSelectedCategory('All')}
  >
    All
  </div>
  <div
    className={`box ${selectedCategory === 'Podcast' ? 'active' : ''}`}
    onClick={() => setSelectedCategory('Podcast')}
  >
    Podcast
  </div>
  <div
    className={`box ${selectedCategory === 'Narendra Modi' ? 'active' : ''}`}
    onClick={() => setSelectedCategory('Narendra Modi')}
  >
    Narendra Modi
  </div>
  <div
    className={`box ${selectedCategory === 'Arjit Singh' ? 'active' : ''}`}
    onClick={() => setSelectedCategory('Arjit Singh')}
  >
    Arjit Singh
  </div>
  <div
    className={`box ${selectedCategory === 'News' ? 'active' : ''}`}
    onClick={() => setSelectedCategory('News')}
  >
    News
  </div>
  <div
    className={`box ${selectedCategory === 'Sport' ? 'active' : ''}`}
    onClick={() => setSelectedCategory('Sport')}
  >
    Sport
  </div>
  <div
    className={`box ${selectedCategory === 'Vocal Language' ? 'active' : ''}`}
    onClick={() => setSelectedCategory('Vocal Language')}
  >
    Vocal Language
  </div>
  <div
    className={`box ${selectedCategory === 'Router' ? 'active' : ''}`}
    onClick={() => setSelectedCategory('Router')}
  >
    Router
    
  </div>
</div>

        {/* <h2>Recommanded</h2> */}
        <div className="recommandedVideos__videos">
          {filteredVideos.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              views={video.views}
              timestamp={video.timestamp}
              channelImage={video.channelImage}
              channel={video.channel}
              image={video.image}
            />
          ))}
        </div>
      </div>
  );
}

export default RecommandedVideos;


