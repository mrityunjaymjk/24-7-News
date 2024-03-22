
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/navbar';
import NewsCards from './components/NewsCard';
// import Slide from './components/Slide';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        {/* <Slide/> */}
        <NewsCards/>
        <Footer/>
      </div>
    )
  }
}