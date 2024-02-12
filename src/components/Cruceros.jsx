import React, { useState, useEffect, useRef } from 'react';
import Crucero1 from '../assets/crucero1.jpg'
import Crucero2 from '../assets/crucero2.jpg'
import Crucero3 from '../assets/crucero3.jpg'
import Crucero4 from '../assets/crucero4.jpg'
import './Cruceros.css'

export const Cruceros = () => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);
  
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };
  
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      }, options);
  
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
  
      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }, []);
  
    return (
      <>
      <h1 className='title-cruceros-img'>NUESTRO PRODUCTO</h1>
      <div ref={containerRef} className={`back-crucero ${isVisible ? 'visible' : ''}`}>
        {isVisible && (
          <>
            <div className='card-crucero'>
              <img src={Crucero1} className='img-crucero' alt='Crucero 1' />
            </div>
            <div className='card-crucero'>
              <img src={Crucero2} className='img-crucero' alt='Crucero 2' />
            </div>
            <div className='card-crucero'>
              <img src={Crucero3} className='img-crucero' alt='Crucero 3' />
            </div>
            <div className='card-crucero'>
              <img src={Crucero4} className='img-crucero' alt='Crucero 4' />
            </div>
          </>
        )}
      </div>
      </>
    );
  };
  

  