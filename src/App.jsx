
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
import Hero from './about';
import React, {useState} from 'react';
import "./App.css";
import Aboutme from './profilepicture';
import Picturepro from './assets/mine.jpg';
import Contact from './contact';


function App() {
  const [showText , setShowText] = useState(false);

  return(
    <div>
      {!showText && <Hero onVeiwMore={() =>
        setShowText(true)} />}
      {showText && <Aboutme/>}
      <Contact/>
    </div>
  );
}

export default App;
