import React from 'react';

const VideoDetail = ({video}) => {

  if(!video){
    return <div>Loading...</div>
  }

  const { videoId }= video.id;
  const url = `http://www.youtube.com/embed/${videoId}` ;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title={ video.snippet.title } src={url} frameBorder="0" className="embed-recursive-item"></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;