import React, { useState }from 'react';
import FirstNav from './components/FirstNav';
import TextForm from './components/TextForm';


export default function App() {
  const [dark, setDarkMode] = useState('light');
  function handleDarkClick() {

    if (dark === 'dark'){
    setDarkMode("light")
    document.body.style.backgroundColor ='white'}
    else{
      setDarkMode("dark")
      document.body.style.backgroundColor ='black'
    }
    console.log(dark)
  }
  
  const style={
    color: dark ==='light'? 'black' :'white',
  };
  
  return (


    <div>
      <FirstNav title="TextUtils" onClick ={handleDarkClick} mode={dark}/>
     <div class='container my-3' style={style}>
     <TextForm heading='Enter your text'  mode={dark} />
     </div>
    </div>
  )
}
