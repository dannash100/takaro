import React from 'react';
import './App.css';
import Background from './components/Background'
import BackgroundMobile from './components/Background mobile'
import Title from './components/Title'
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
    <div className="App">
     {/* <Title/>
     <Background/> */}
     <BackgroundMobile/>
    </div>
    </ParallaxProvider>
  );
}

export default App;
