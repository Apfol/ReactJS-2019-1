import React from 'react'
import './VideoItem.css'

export default function VideoItem({video, onSelectVideo}) {
    console.log(video);
    
    return (
        <div className="Video-item" onClick={()=>{onSelectVideo(video)}}>
            <h3 className="title-item">{video.title}</h3>
            {/* <h4 className="id-item">id: {video.url}</h4> */}
            <img style={{ 'background-image': `url(${video.thumbnails.default.url})`, height: "100px", width: "100px"}}  />
        </div>
    )
}
