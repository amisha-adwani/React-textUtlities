import React from 'react';
import FirstNav from './components/FirstNav';
import TextForm from './components/TextForm';


export default function App() {
  return (
    <div>
     <FirstNav />
     <div class='container my-3' >
     <TextForm heading='Enter your text'/>
     </div>
    </div>
  )
}
