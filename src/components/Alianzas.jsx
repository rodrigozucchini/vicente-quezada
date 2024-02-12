import React from 'react'
import Nh from '../assets/nh.png'
import Radisson from '../assets/radisson.png'
import Hilton from '../assets/hilton.png'
import Damac from '../assets/damac.png'
import Marriot from '../assets/marriot.png'

import Pr from '../assets/princess.jpg'
import Explora from '../assets/explora.png'
import Msc from '../assets/msc.jpg'
import Norw from '../assets/norw.png'
import Voyages from '../assets/voyages.png'
import Sea from '../assets/sea.png'
import Costa from '../assets/costa.png'
import Cunard from '../assets/cunard.png'
import Oceania from '../assets/oceania.jpg'
import Carnival from '../assets/carnival.png'
import Az from '../assets/azamara.png'
import Disney from '../assets/disney.jpg'
import Regent from '../assets/regent.png'

import Tarjetas from '../assets/tarjetas.png'

import Yess from '../assets/yess.jpg'

import './Alianzas.css'

export const Alianzas = () => {
  return (
    <div className='back-alianzas'>
        <h1 className='title-alianzas'>NUESTRAS ALIANZAS CON HOTELES</h1>
        <div className='back-logos-hoteles'>
            <div className='logos-hoteles'>
                <img src={Nh} className='hoteles'/>
            </div>
            <div className='logos-hoteles'>
                <img src={Radisson} className='hoteles'/>
            </div>
            <div className='logos-hoteles'>
                <img src={Hilton} className='hoteles'/>
            </div>
            <div className='logos-hoteles'>
                <img src={Damac} className='hoteles'/>
            </div>
            <div className='logos-hoteles'>
                <img src={Marriot} className='hoteles'/>
            </div>
        </div>

        <h1 className='title-alianzas'>NUESTRAS ALIANZAS CON CRUCEROS</h1>
        <div className='back-logos-hoteles'>
            <div className='logos-hoteles'>
                <img src={Pr} className='hoteles'/>
            </div>
            <div className='logos-hoteles'>
                <img src={Explora} className='hoteles'/>
            </div>
            <div className='logos-hoteles'>
                <img src={Msc} className='hoteles'/>
            </div>
            <div className='logos-hoteles'>
                <img src={Norw} className='hoteles'/>
            </div>
            <div className='logos-hoteles'>
                <img src={Voyages} className='hoteles'/>
            </div>
            <div className='logos-hoteles'>
                <img src={Sea} className='hoteles'/>
            </div>
            <div className='logos-hoteles'>
                <img src={Costa} className='hoteles'/>
            </div>

            <div className='logos-hoteles'>
                <img src={Cunard} className='hoteles'/>
            </div>
            <div className='logos-hoteles'>
                <img src={Oceania} className='hoteles'/>
            </div>
            <div className='logos-hoteles'>
                <img src={Carnival} className='hoteles'/>
            </div>
            <div className='logos-hoteles'>
                <img src={Az} className='hoteles'/>
            </div>
            <div className='logos-hoteles'>
                <img src={Disney} className='hoteles'/>
            </div>
            <div className='logos-hoteles'>
                <img src={Regent} className='hoteles'/>
            </div>
        </div>
        <h1 className='title-alianzas'>¿CÓMO COBRAMOS?</h1>
        <div className='back-logos-tarjeta'>
            <div className='logos-tarjeta'>
                <img src={Tarjetas} className='tarjeta'/>
            </div>
        </div>
        <h1 className='title-alianzas'>NUESTRO SISTEMA DE ENTRENAMIENTO</h1>
        <div className='back-logos-tarjeta'>
            <div className='logos-tarjeta'>
                <img src={Yess} className='tarjeta'/>
            </div>
        </div>
    </div>
  )
}
