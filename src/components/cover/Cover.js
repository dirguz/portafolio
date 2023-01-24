import React from 'react'
import './Cover.css'
//import coverVideo1 from '../../media/coverVideo1.mp4'
import coverVideo2 from '../../media/coverVideo2.mp4'

const Cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={coverVideo2} autoPlay loop muted/>
        <h1>Diego Guzman Sanabria</h1>
        <p>Fullstack developer | Javascript | React | NodeJS | Administrador de Empresas</p>
    </div>
  )
}

export default Cover