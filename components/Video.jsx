
'use client'

import ReactPlayer from 'react-player';

export default function Player(props) {
  const videoURL = "https://www.youtube.com/watch?v=" + props.videoId
  return(
      <div>
          <ReactPlayer
              url={videoURL}
              playing={true}
              onEnded={props.onEnd}
              config={{
                  youtube: {
                      playerVars: {
                          autoplay: 1,
                          controls: 1
                      }
                  }
              }}
          />
      </div>
)
}