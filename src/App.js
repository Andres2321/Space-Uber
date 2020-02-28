import React from 'react';
import './App.css';
import Container from './Container'
import ResetScroll from './components/ResetScroll';

function App() {
  return (
    <>
      <ResetScroll>
        <Container />
      </ResetScroll>
    </>
  )
}

export default App;
