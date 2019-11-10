import React from 'react'
import item from './VideoItem.css'

export default function VideoItem({video, onSelectVideo}) {
    console.log(video);
    return (
        <div className="Video-item" onClick={()=>{onSelectVideo(video)}}>
        {/* <h4 className="id-item">id: {video.url}</h4> */}
        <img alt="" className={item.image_item} style={{ 'background-image': `url(${video.thumbnails.medium.url})`, height: "100px", width: "100%",   "object-fit": "cover"}}></img>
        <h3 className={item.title_item}>{video.title}</h3>
        </div>
    )
}
