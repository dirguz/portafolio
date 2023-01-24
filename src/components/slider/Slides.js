import React from 'react'
import './Slider.css'
import proyecto_1 from '../../media/proyecto_1.jpg'
import proyecto_2 from '../../media/proyecto_2.jpg'
import proyecto_3 from '../../media/proyecto_3.jpg'

const slidesInfo=[
    {
        src:proyecto_1,
        alt:'Proyecto 1',
        desc:'Proyecto 1'

    },
    {
        src:proyecto_2,
        alt:'Proyecto 2',
        desc:'Proyecto 2'

    },
    {
        src:proyecto_3,
        alt:'Proyecto 3',
        desc:'Proyecto 8'

    }
]

let slides = slidesInfo.map(s=>{
    return(
    <div className='slide-container'>
        <img src={s.src} alt={s.alt}/>
        <div className='slide-desc'>
            <span>{s.desc}</span>
        </div>
    </div>)
});

export default slides;