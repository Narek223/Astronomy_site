import React,{useState} from 'react'
import moon from '../../img/Custom Background - 1.jpg'
import './style.css'
import {Header} from '../header/Header'


export  function Home () {


  return (
<div className='conteiner'>
<img src={moon} className='im1'/>
 <Header/>
     <section className='one'>
      <h1>Learn</h1>
      <ul>
        <li>Space</li>
        <li>Stars</li>
        <li>Planets</li>
        <li>Galaxies</li>
        <li>Life</li>
      </ul>
      <h1>and Cosmos</h1>  
      </section> 
    
    </div>
       
  )
}
