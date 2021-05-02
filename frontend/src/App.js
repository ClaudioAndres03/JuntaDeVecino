import React,{useContext} from 'react'
import ContentRouter from "./Components/Common/ContentRouter";
import 'bootstrap/dist/css/bootstrap.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Navbar from "./Components/Common/Navbar";
import GlobalContext from "./Components/Common/GlobalContext";
import './App.scss';

// const { ipcRenderer } = window.require('electron');

function App() {
  const [contextState, , contextMiddleware] = useContext(GlobalContext);

  return (

   <>
      {contextState.isAuth && <Navbar/>}
      <ContentRouter />
    </>
  );
}

export default App;
