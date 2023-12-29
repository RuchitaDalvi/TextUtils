import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
function App() {
  return (
    <>
    <Navbar title='TextUtils' about='About US'/>
    <div className="container my-3">
    <TextForm heading="Enter Text"/>
    <About/>
    </div>
    </>
  );
}

export default App;
