import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Homepage() {
  return (
    <>
      <Header
        text="Homepage" />
      
      <Footer />
    </>
  )
}

export default Homepage;