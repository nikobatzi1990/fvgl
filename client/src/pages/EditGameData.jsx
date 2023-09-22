import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from '../components/Button';

function EditGameData () {
  const gameId = useParams();
  
  return (
    <>
      <Header
          text="Edit Game Data" />

      <Footer />
    </>
  )
}

export default EditGameData;