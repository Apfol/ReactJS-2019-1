import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import './VideosList.css';
export default function VideoList({videos, onSelectVideo}) {
    const videoItems = videos.map((video, id) => {
        return <VideoItem video={video} key={id} onSelectVideo={onSelectVideo}></VideoItem>
    });
    return (
        <div className="video-list">
            {videoItems}
        </div>
    )
}
