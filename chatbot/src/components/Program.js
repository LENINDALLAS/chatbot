import React from 'react';
import styled from 'styled-components';

function Program({ visible }) {
    return (
        <ProgramContainer>
            <CloseIcon onClick={() => visible()} className="fas fa-times"></CloseIcon >
            <ProgramIframe src="https://code.jquery.com/jquery-3.6.0.js" title='program code' />
        </ProgramContainer>
    );
}

export default Program;

const ProgramContainer = styled.div`
position: relative;
`;

const ProgramIframe = styled.iframe`
/* border: 3px solid #000; */
margin: 5%;
position: relative;
width: 70%;
height: 550px;
border-radius: 5px;

@media (max-width : 1100px) {
     width: 90%;

  }
`;

const CloseIcon = styled.i`
  position: inherit;
  margin-left: 75%;
  top: 67px;
  font-size: 30px;
  color: rgba(255, 0, 0, 0.7);
  cursor: pointer;

:hover {
    color: rgba(255, 0, 0, 1);
}

@media (max-width : 1100px) {
    margin-left: 97%;
  }
`