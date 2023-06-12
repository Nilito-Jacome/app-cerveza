import React from "react";
import "./App.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
React


function App() {
 

  return (

    <Container className='App'>
      <div className='misti'>
        <img src="misti.jpg" alt="" />
      </div>

      <div className="tipos">
        <div className="card1">
          <h1>Weissbier</h1>
          <br />
          <Image className="weissbier" src="weissbier/1.jpg"/>
        </div>
        <div className="card2">
          <h1>Porter</h1>
          <br />
          <Image className="porter" src="porter/1.jpg"/>
        </div>
        <div className="card3">
          <h1>Ipa</h1>
          <br />
          <Image className="ipa" src="ipa/1.jpg" thumbnail />
        </div>
        <div className="card4">
          <h1>Amber</h1>
          <br />
          <Image className="amber" src="amber/1.jpg" thumbnail />
        </div> 
        <div className="card5">
          <h1>Golden</h1>
          <br />
          <Image className="golden" src="golden/1.png" thumbnail />
        </div>       
      </div>

    </Container>
  )
}

export default App
