import React from 'react'
import './VideoItem.css'

export default function VideoItem({video, onSelectVideo}) {
    return (
        <div className="Video-item" onClick={()=>{onSelectVideo(video)}}>
            <h3 className="title-item">{video.title}</h3>
            <h4 className="id-item">id: {video.url}</h4>
        </div>
    )
}
