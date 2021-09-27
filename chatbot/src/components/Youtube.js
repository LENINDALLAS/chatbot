import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

function Youtube({ youtubeUrl, visible }) {

    console.log(youtubeUrl, 'url');

    const opts = {
        height: '500vw',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

    const onReady = (event) => {
        event.target.pauseVideo();
    }


    return (
        <YoutubeContainer>
            <CloseIcon onClick={() => visible()} className="fas fa-times"></CloseIcon >
            <YouTube videoId={youtubeUrl} className='youtubeVideo' opts={opts} onReady={(event) => onReady(event)} />
        </YoutubeContainer>
    )


};

export default Youtube;

const YoutubeContainer = styled.div`
margin: 5%;
position: relative;
/* width: 100%; */
`;

const CloseIcon = styled.i`
  position: inherit;
  left: 100%;
  top: 7px;
  font-size: 30px;
  color: rgba(255, 0, 0, 0.7);
  cursor: pointer;

:hover {
    color: rgba(255, 0, 0, 1);
}

/* @media (max-width: 1100px) {
     margin-left: 45rem;

  } */
 
`