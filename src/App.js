import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
function App() {
  const [mode, setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor="white";
    }
    else{
      setMode('dark');      
      document.body.style.backgroundColor="#19376D";
    }
  }
  return (
    <>
    <Navbar title='TextUtils' about='About US' mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <TextForm heading="Enter Text" mode={mode}/>
    <About/>
    </div>
    </>
  );
}

export default App;
