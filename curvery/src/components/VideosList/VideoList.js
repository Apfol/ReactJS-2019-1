import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import './VideosList.css';
export default function VideoList({videos}) {
    const videoItems = videos.list.map((video, id) => {
        return <VideoItem video={video}></VideoItem>
    });
    return (
        <div className="video-list">
            {videoItems}
        </div>
    )
}
