
'use client'

import ReactPlayer from 'react-player';

export default function Player(props) {
//   const stylePlayer ={
//     '@media(min-width:840px)' : {
//         width: '1000px',
//         height: '750px'
//     } ,
//     '@media(max-width:640px)' : {
//         width:'100%',
//         height:'100%'
//     } 
//   }
  const videoURL = "https://www.youtube.com/watch?v=" + props.videoId
  return(
      <div className='video-wrapper' >
          <ReactPlayer
              className='reactplayer'
              width='100%'
              height='100%'
              url={videoURL}
              playing={true}
              onEnded={props.onEnd}
              controls={true}
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