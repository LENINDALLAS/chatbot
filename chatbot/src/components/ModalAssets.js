import React, { useState } from 'react';
import styled from 'styled-components';
import List from './List';
import { data } from '../data.js';
import Youtube from './Youtube';
import Pdf from './Pdf';
import Program from './Program';
import ChatBot from 'react-simple-chatbot';

function ModalAssets({ handleAssets, handleVideo, handleDocument, handleSnippet, modal, video, document, snippet }) {
    // console.log(data.content_type.videos.documents)

    const { videos, program, pdf } = data.content_type;
    const [youtubeVisible, setYouTubeVisible] = useState(false);
    const [youtubeUrl, setYoutubeUrl] = useState('');
    const [documentVisible, setDocumentVisible] = useState(false);
    const [pdfUrl, setPdfUrl] = useState('');
    const [programVisible, setProgramVisible] = useState(false);
    const [programUrl, setProgramUrl] = useState('');


    const handleYoutubeVisible = (url) => {
        setYouTubeVisible(youtubeVisible ? false : true);
        if (url) {
            const videoId = url.split('=');
            // console.log(videoId[1])
            setYoutubeUrl(videoId[1])
            setDocumentVisible(false);
            setProgramVisible(false);
        }
    }

    const handlePdfVisible = (url) => {
        setDocumentVisible(documentVisible ? false : true);
        if (url) {
            setPdfUrl(url);
            setYouTubeVisible(false);
            setProgramVisible(false);
        }
        // console.log('pdf url', url)
    }

    const handleProgramVisible = (url) => {
        setProgramVisible(programVisible ? false : true);
        if (url) {
            setProgramUrl(url)
            setYouTubeVisible(false);
            setDocumentVisible(false);
        }
        // console.log('clicked', url)
    }

    return (
        <div className='assetContainer'>
            {
                youtubeVisible &&
                <Youtube
                    youtubeUrl={youtubeUrl}
                    visible={handleYoutubeVisible}
                />
            }

            {
                documentVisible &&
                <Pdf
                    pdfUrl={pdfUrl}
                    visible={handlePdfVisible}
                />
            }

            {
                programVisible &&
                <Program
                    programUrl={programUrl}
                    visible={handleProgramVisible}
                />
            }

            {
                modal && !video && !document && !snippet &&
                <AssetContainer>
                    <CloseIcon onClick={() => handleAssets()} className="far fa-times-circle"></CloseIcon >
                    <FlexAsset>
                        <EachAsset onClick={() => handleVideo()}>
                            <h3>Videos</h3>
                            <i class="fab fa-youtube"></i>
                        </EachAsset>
                        <EachAsset onClick={() => handleDocument()}>
                            <h3>Documents</h3>
                            <i class="fas fa-file-word"></i>
                        </EachAsset>
                        <EachAsset onClick={() => handleSnippet()}>
                            <h3>Code Snippets</h3>
                            <i class="fas fa-file-code"></i>
                        </EachAsset>

                    </FlexAsset>

                </AssetContainer>
            }
            {
                video &&
                <AssetContainer>
                    <CloseIcon onClick={() => handleVideo()} className="far fa-times-circle"></CloseIcon >
                    {
                        videos.documents.map((item) => {
                            return (
                                <List
                                    handle={handleYoutubeVisible}
                                    key={item.id}
                                    src={item.thumbnail}
                                    title={item.title}
                                    url={item.url}

                                />
                            )
                        })
                    }

                </AssetContainer>
            }
            {
                document &&
                <AssetContainer>
                    <CloseIcon onClick={() => handleDocument()} className="far fa-times-circle"></CloseIcon >
                    {
                        pdf.documents.map((item) => {
                            return (
                                <List
                                    handle={handlePdfVisible}
                                    key={item.id}
                                    src={item.thumbnail}
                                    title={item.title}
                                    url={item.url}
                                />
                            )
                        })
                    }
                </AssetContainer>
            }
            {
                snippet &&
                <AssetContainer>
                    <CloseIcon onClick={() => handleSnippet()} className="far fa-times-circle"></CloseIcon >
                    {
                        program.documents.map((item) => {
                            return (
                                <List
                                    handle={handleProgramVisible}
                                    key={item.id}
                                    src={item.thumbnail}
                                    title={item.title}
                                    url={item.url}
                                />
                            )
                        })
                    }
                </AssetContainer>
            }
            <ChatbotContainer className="chatbotContainer" >
                <ChatBot
                    steps={[
                        {
                            id: '1',
                            message: 'Hi',
                            trigger: '2',
                        },
                        {
                            id: '2',
                            message: 'Please type your search',
                            trigger: '3',
                        },
                        {
                            id: '3',
                            user: true,
                            validator: (value) => {
                                if (value.toUpperCase() !== 'SHOW STEM') {
                                    return 'Please type "show STEM"';
                                }
                                return true;
                            },
                            trigger: '4',
                        },
                        {
                            id: '4',
                            component: (
                                <div onClick={() => handleAssets()} style={{ 'fontSize': '1rem' }}> Please
                                    <u style={{ 'textDecoration': 'underline', 'color': 'rgb(0, 0, 255)', 'cursor': 'pointer' }}> click here </u>
                                    to show Assets.</div>
                            ),
                            end: true,
                        },
                    ]}
                />
            </ChatbotContainer>
        </div>
    );
}

export default ModalAssets;

const AssetContainer = styled.div`
  background-image: url("https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-zoom-virtual-background-_Tcjok-d9b4.jpg");
  position: relative;
  width: 50%;
  height: 400px;
  margin: 7% 35% 2% auto;
  border-radius: 10px;
  border: none;
  overflow-y: scroll;

  @media (max-width : 1024px) {
width: 100%;
  }


`

const ChatbotContainer = styled.div`
@media (max-width : 1024px) {
position: inherit;

  }

`;

const CloseIcon = styled.i`
  position: absolute;
  right: 7px;
  top: 7px;
  font-size: 30px;
 color: rgba(255, 0, 0, 0.7);
  cursor: pointer;

:hover {
     color: rgba(255, 0, 0, 1);
}
`
const FlexAsset = styled.div`
position: inherit;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
top: 25%;
/* border: 2px solid #000; */
/* margin: 5% 5%; */
`;

const EachAsset = styled.div`
min-width: 20%;
height: 170px;
border: 2px solid #fff;
border-radius: 10px;
text-align: center;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
cursor: pointer;
 margin-bottom: 5px; 


:hover {
box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;

>i {
font-size: 5.5rem;
}
}

>h3 {
    padding: 15px;
    font-size: 1.5rem
}

>i {
font-size: 5rem;
} 
`
