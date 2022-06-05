import React from 'react'
import Slider from 'react-slick'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { Timeline, Tween } from 'react-gsap'
import { useRouter } from 'next/router'

const Projects = () => {
  const router = useRouter()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className="Projects--container">
      <Slider {...settings} className="slider">
          <div className="item">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" alt="ABC" />
          </div>
          <div className="item">
            <img src="https://media5.sgp1.digitaloceanspaces.com/wp-content/uploads/2021/10/13142603/Cute-Dog-Wallpapers.jpg" />
          </div>
          <div className="item">
            <h3>3</h3>
          </div>
          <div className="item">
            <h3>4</h3>
          </div>
          <div className="item">
            <h3>5</h3>
          </div>
          <div className="item">
            <h3>6</h3>
          </div>
        </Slider>

        <Timeline target={
            <div className="Projects--footer">
              <div className="next--page" onClick={() => router.push('/career')}>
                <p>{'<Career />'}</p>
                  <AiOutlineArrowLeft />
              </div>
              <div className="next--page" onClick={() => router.push('/contact')}>
                <p>{'<Contact />'}</p>
                  <AiOutlineArrowRight />
              </div>
            </div>
          }>
            <Tween
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
            />
          </Timeline>
    </div>
  )
}

export default Projects