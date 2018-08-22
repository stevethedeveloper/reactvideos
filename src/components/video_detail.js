import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url} title="Video Player"></iframe>
          </div>
          <div className="details">
            <div className="media-heading">{video.snippet.title}</div>
            <div className="media-channel-title">{video.snippet.channelTitle}</div>
            <div className="media-description">{video.snippet.description}</div>
          </div>
        </div>
    );
};

export default VideoDetail;
