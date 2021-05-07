import React from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';






componentDidMount() {
  axios.get('http://localhost:3001/moods').then(response =>}
    console.log(response.data)
}




function App() {
  return (
    <h1
  );
}

export default App;
