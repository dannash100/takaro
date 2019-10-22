import React from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './components/Background'
import Title from './components/Title'
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
    <div className="App">
     <Title/>
     <Background/>
    </div>
    </ParallaxProvider>
  );
}

export default App;
