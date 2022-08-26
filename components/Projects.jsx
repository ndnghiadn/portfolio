import React from 'react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { Timeline, Tween } from 'react-gsap'
import { useRouter } from 'next/router'
import { Carousel } from 'react-responsive-carousel'

const Projects = () => {
  const router = useRouter()

  return (
    <div className="Projects--container">
        <h1>COMING <span>SOON</span></h1>

        {/* <Carousel autoPlay className="carousel">
          <div>
            <img alt="" src="https://filmdaily.co/wp-content/uploads/2020/05/dog-videos-lede-1300x868.jpg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img alt="" src="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-588935825.jpg" />
            <p className="legend">Legend 2</p>
          </div>
        </Carousel> */}

        {/* <Timeline target={
            <div className="Projects--footer">
              <div className="next--page noselect" onClick={() => router.push('/career')}>
                <p>{'<Career />'}</p>
                  <AiOutlineArrowLeft />
              </div>
              <div className="next--page noselect" onClick={() => router.push('/contact')}>
                <p>{'<Contact />'}</p>
                  <AiOutlineArrowRight />
              </div>
            </div>
          }>
            <Tween
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
            />
          </Timeline> */}
    </div>
  )
}

export default Projects