import React from 'react'
import ContentRouter from "./Components/Common/ContentRouter"
import 'bootstrap/dist/css/bootstrap.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.scss'

// const { ipcRenderer } = window.require('electron');

function App() {
  return (
    <ContentRouter />
  );
}

export default App;
