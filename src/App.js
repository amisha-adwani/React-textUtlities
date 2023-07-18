import React, { useState }from 'react';
import FirstNav from './components/FirstNav';
import TextForm from './components/TextForm';


export default function App() {
  const [dark, setDarkMode] = useState('light');

  function handleDarkClick() {
    if (dark === 'dark')
    setDarkMode("light")
    else{
    setDarkMode("dark")
    }
    console.log(dark)
  }

  return (
    <div >
      <FirstNav title="TextUtils" onClick ={handleDarkClick} mode={dark}/>
     <div class='container my-3' >
     <TextForm heading='Enter your text' />
     </div>
    </div>
  )
}
