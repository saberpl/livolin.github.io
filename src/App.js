import React from 'react';
import './App.css';
import TopMenu from './components/TopMenu';
import Banner from './components/Banner';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <TopMenu />
      <Banner />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
