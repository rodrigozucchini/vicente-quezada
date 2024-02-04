import './App.css'
import React, {useState, useEffect} from 'react';
import BounceLoader from "react-spinners/BounceLoader";
import Banner from './components/Banner'
import { Cruceros } from './components/Cruceros'
import Header from './components/Header'
import Storytelling from './components/Storytelling'
import Whatsapp from './components/Whatsapp'
import Wave from './components/Wave'


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <div>
      {
        loading
          ? (
            <div className="loader">
              <BounceLoader color="#508AD3" size={90} loading={loading} />
            </div>
          )
          : (
            <>
              <Header />
              <Storytelling />
              <Wave />
              <Cruceros />
              <Banner />
              <Whatsapp />
            </>
          )
      }
    </div>
  );
}

export default App
