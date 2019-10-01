import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import list from './VideosList.css';
export default function VideoList({videos, onSelectVideo}) {
    const videoItems = videos.map((video, id) => {
        return <VideoItem video={video} key={id} onSelectVideo={onSelectVideo}></VideoItem>
    });
    return (
        <div className={list.container}>
        <div className={list.video_list}>
            {videoItems}
        </div>
        </div>
    )
}
