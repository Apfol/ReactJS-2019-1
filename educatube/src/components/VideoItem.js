import React from 'react'

const videoItemStyle = {
    background: "#f3f3f3",
    
}

export default function VideoItem({video}) {
    return (
        <div style={videoItemStyle}>
            <h3>{video.title}</h3>
            <h4>id: {video.url}</h4>
        </div>
    )
}
