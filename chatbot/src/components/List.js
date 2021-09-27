import React from 'react';
import styled from 'styled-components';

function List({ src, title, url, handle }) {

    // const { videos, pdf } = props;
    // console.log(props, 'pp')
    return (
        <ListContainer>
            {/* {
                videos.map((item) => {
                    return ( */}
            <VideoThumbnail onClick={() => handle(url)}>
                <img src={src} alt={title} />
                <p>{title}</p>
            </VideoThumbnail>
            {/* )
                }
                )
            } */}

        </ListContainer>
    );
}

export default List;

const ListContainer = styled.div`
position: inherit;
display: flex;
flex-direction: column;
/* border: 2px solid #000; */
top: 10%;
`;

const VideoThumbnail = styled.div`
position: inherit;
display: flex;
margin: 5px; 
border: 2px solid rgb(168 159 159);
border-radius: 5px;
align-items: center;

:hover {
box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

}

> img{
    width: 30%;
    height: 10%;
    padding: 10px;
    border-radius: 14px;
}

> p{
    font-size: 1rem;
    font-weight: 550;
    text-align: left;
}
`;