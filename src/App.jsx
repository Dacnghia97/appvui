import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import GameList from './components/GameList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <div id="home">
        <Banner />
      </div>
      <div id="games">
        <GameList />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;
