import React from 'react'
import './Slider.css'
import Carousel,{ slidesToShowPlugin } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import Slides from './Slides'

function Slider() {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>Mis proyectos...</h2>
      </div>
      <Carousel
        plugins={[
          "infinite",
          "arrows",
          "centered",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
        ]}
        slides={Slides}
        offset={50}
        breakpoints={{
          960: {
            plugins: ["infinite",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1
                }
              }
            ]
          }
        }}
      />
    </div>
  );
}

export default Slider;