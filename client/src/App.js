import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [title, setTitle] = useState();
  useEffect(() => {
    axios.get('http://localhost:5000/user')
      .then(result => {
        setTitle(result.data);
        console.log(result);
      });
  });
  return (
    <p>Hi {title}</p>
  );
}

export default App;
