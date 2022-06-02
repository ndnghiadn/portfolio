
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

const AboutMe = () => {

  let title = useRef(null)
  let desc = useRef(null)
  let image = useRef(null)
  let icons = useRef(null)
  let arrow = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(require('gsap/ScrollTrigger'))

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: [title],
        start: '2vh 80%',
        toggleActions: "restart pause restart pause",
      },
    })
    tl.to(title, {
      y: -24,
      duration: 1,
      opacity: 1,
    }),
    tl.to(image, {
      x: -24,
      duration: 1,
      opacity: 1,
    }),
    tl.to([desc, icons], {
      y: -12,
      duration: 2,
      opacity: 1,
    })
    tl.to([arrow], {
      y: -6,
      duration: 0.1,
      opacity: 1,
    })

  }, [])

  return (
    <>
      <div className='AboutMe--container'>
        <div className="info">
          <h2 ref={(el) => (title = el)} className="title">About Me 🤗</h2>
          <p ref={(el) => (desc = el)} className="desc">I'm Nghia Nguyen also known as ndnghiadn.<br></br>My goals are to become a full-stack developer, build pratical web and mobile applications.</p>
          <div ref={(el) => (icons = el)} className="icons">
            <ul>
              <li><a href="https://github.com/ndnghiadn" target="_blank"><AiOutlineGithub /></a></li>
              <li><a href="https://www.linkedin.com/in/ndnghiadn/" target="_blank"><AiOutlineLinkedin /></a></li>
              <li><a href="https://twitter.com/ndnghiadn" target="_blank"><AiOutlineTwitter /></a></li>
            </ul>
          </div>
        </div>
        <div className="avatar">
          <img ref={(el) => (image = el)} src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/118264695_3132829253623812_7602991094953584864_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=apw84lawCq8AX_CXek_&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT9vw1YhXjW8z0-I-pxvbSlXU3zGCIzs09rcwvJeU89Eyg&oe=62BB66EE" alt="Avatar" />
        </div>
        <div ref={(el) => (arrow = el)} className="arrow-down">
          <div class="arrows"></div>
        </div>


      </div>
        <section className="section">
        <Controller>
            <div>
              <Scene
                triggerHook="onLeave"
                duration={2000}
                pin
              >
                {(progress) => (
                  <div className="sticky">
                    <Timeline totalProgress={progress} paused>
                      <Tween
                          from={{ x: '10%', top: '60%', opacity: 0.5 }}
                          to={{ x: '110%', top: '10%', opacity: 1 }}
                      >
                        <div className="animation">
                          <img src="/images/techstack.png" alt="techstacks" />
                        </div>
                      </Tween>
                      <Timeline
                        target={
                          <div className="heading">
                            <h2>Tech Stacks</h2>
                          </div>
                        }
                      >
                        <Tween
                          from={{ opacity: 0 }}
                          to={{ opacity: 1 }}
                        />
                        {/* <Tween
                          to={{ x: '110%', opacity: 0 }}  
                        /> */}
                      </Timeline>
                      <Timeline target={
                        <div className="container__progressbars">

                        <div className="progressbar">
                          <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-node shadow-node"> </circle>
                          </svg>
                          <span className="progressbar__text shadow-node">Node.js</span>
                        </div>
                    
                        <div className="progressbar">
                          <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-scss shadow-scss"> </circle>
                          </svg>
                          <span className="progressbar__text shadow-scss">SCSS</span>
                        </div>


                        <div className="progressbar">
                          <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-ts shadow-ts"> </circle>
                          </svg>
                          <span className="progressbar__text shadow-ts">Typescrypt</span>
                        </div>


                        <div className="progressbar">
                          <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-react shadow-react"> </circle>
                          </svg>
                          <span className="progressbar__text shadow-react">React</span>
                        </div>

                        
                        <div className="progressbar">
                          <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-vue shadow-vue"> </circle>
                          </svg>
                          <span className="progressbar__text shadow-vue">Vue</span>
                        </div>


                      </div>
                      }>
                        <Tween 
                          from={{ opacity: 0 }}
                          to={{ opacity: 1 }}
                        />
                      </Timeline>
                    </Timeline>
                  </div>
                )}
              </Scene>
            </div>
          </Controller>
          {/* <span>ndnghia @2022</span> */}
        </section>
    </>
  )
}

export default AboutMe