import React, { useState } from 'react';
import './App.css';
import ModalAssets from './components/ModalAssets';

function App() {

  const [modal, setModal] = useState(false);
  const [video, setVideo] = useState(false);
  const [document, setDocument] = useState(false);
  const [snippet, setSnippet] = useState(false);


  const handleAssets = () => {
    setModal(modal ? false : true);
    // console.log('clicked')
  }

  const handleVideo = () => {
    setVideo(video ? false : true);
    // console.log('clicked video')
  }

  const handleDocument = () => {
    setDocument(document ? false : true);
    // console.log('clicked document')
  }

  const handleSnippet = () => {
    setSnippet(snippet ? false : true);
    // console.log('clicked snippet')
  }

  return (
    <div className='app'>
      <ModalAssets
        handleAssets={handleAssets}
        handleVideo={handleVideo}
        handleDocument={handleDocument}
        handleSnippet={handleSnippet}
        modal={modal}
        video={video}
        document={document}
        snippet={snippet}
      />

    </div>
  );
}

export default App;
