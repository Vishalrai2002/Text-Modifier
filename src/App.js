import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";



// let name="Vishal";


function App() {
  const [mode, setMode] = useState('light'); // whether dark-mode is enabled or not
  const [alert, setAlert] = useState(null); // for setting the alert 


  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert(" Dark Mode has been Enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert(" Light Mode has been Enabled","success")
    }
  }

  return (
  <>

  {/* <BrowserRouter> */}
        <Navbar title="Text-Modifier"abouttext="About"  mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
        {/* <Routes>
                <Route exact path='/about' element={<About/>} />
                <Route exact path='/' element={<TextForm showAlert = {showAlert} heading = "Enter the text to analyze" mode = {mode}/>} />
        </Routes> */}

        <TextForm showAlert={showAlert} heading ="Enter the text to analyze below" mode={mode}/>  {/* this line is added by me to remove route  */}
        </div>
  {/* </BrowserRouter> */}

  </>
  );
}

export default App;
