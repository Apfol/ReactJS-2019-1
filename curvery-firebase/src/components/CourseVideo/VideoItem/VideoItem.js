import React from 'react'
import './VideoItem.css'

export default function VideoItem({video, onSelectVideo}) {
    console.log(video);
    return (
        <div className="Video-item_VIDEOITEM" onClick={()=>{onSelectVideo(video)}}>
        {/* <h4 className="id-item">id: {video.url}</h4> */}
        <img alt="" className="image-item_VIDEOITEM" style={{ 'background-image': `url(${video.thumbnails.medium.url})`, height: "100px", width: "100%",   "object-fit": "cover"}}></img>
        <h3 className="title-item_VIDEOITEM">{video.title}</h3>
        </div>
    )
}
