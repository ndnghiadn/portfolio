
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
                duration={1000}
                pin
              >
                {(progress) => (
                  <div className="sticky">
                    <Timeline totalProgress={progress} paused>
                      <Tween
                          from={{ x: '0%', top: '10%', opacity: 0 }}
                          to={{ x: '60%', top: '60%', opacity: 1 }}
                      >
                        <div className="animation">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.267 29.267">
                            <path d="M25.925 13.574c.405.173.928.295 1.571.366.295.025.579.036.86.036.326 0 .632-.018.911-.054-.351.329-.803.614-1.349.857-.552.244-1.262.365-2.138.365a9.544 9.544 0 0 1-2.23 4.028c-1.082 1.188-2.37 2.169-3.862 2.943s-3.131 1.312-4.926 1.617c-1.01.182-2.019.272-3.033.272-.765 0-1.533-.055-2.297-.164a15.456 15.456 0 0 1-5.118-1.617C2.669 21.378 1.232 20.169 0 18.599a7.4 7.4 0 0 0 2.433 1.435 8.417 8.417 0 0 0 5.828-.037 7.352 7.352 0 0 0 2.594-1.672 2.821 2.821 0 0 1-.441.036c-.279 0-.534-.049-.764-.146-.367-.146-.62-.345-.757-.594-.142-.249-.142-.524 0-.823.137-.298.493-.562 1.067-.792a5.375 5.375 0 0 1-.566.034c-.283 0-.544-.024-.783-.07a3.205 3.205 0 0 1-1.052-.375 3.369 3.369 0 0 1-.743-.577 3.723 3.723 0 0 1-.494-.66 2.57 2.57 0 0 1 .823-.499c.305-.116.706-.188 1.205-.211-1.118-.243-1.917-.606-2.391-1.078-.475-.475-.777-1.022-.895-1.643.33-.051.657-.108.994-.174.333-.069.6-.076.796-.029-.953-.475-1.614-1.029-1.994-1.662-.327-.559-.492-1.085-.492-1.572 0-.061.006-.127.019-.201a72.606 72.606 0 0 1 4.337 1.644c1.177.501 2.221.988 3.134 1.465.353.142.704.361 1.06.655l1.151.989a21.586 21.586 0 0 1 1.854-3.766c.359-.583.762-1.121 1.213-1.608a6.278 6.278 0 0 1 1.534-1.205c-.023.278-.167.555-.436.822.33-.278.685-.503 1.067-.677.387-.17.792-.283 1.216-.345-.049.28-.248.51-.604.685a8.51 8.51 0 0 1-.93.41c.096-.023.29-.087.574-.189.287-.104.592-.2.915-.283.326-.086.615-.144.879-.164.26-.025.417.021.464.145.072.146.03.271-.127.374a2.52 2.52 0 0 1-.577.267 7.996 7.996 0 0 1-.673.182c-.227.05-.375.086-.447.108l-.677.237a5.371 5.371 0 0 1 2.045.237 5.707 5.707 0 0 1 1.81.953 7.213 7.213 0 0 1 1.441 1.497 6.09 6.09 0 0 1 .914 1.844l.074.293c.021.097.048.205.072.326.244.076.535.12.879.139.34.017.677 0 1.014-.055.332-.054.637-.123.909-.209.276-.085.494-.165.651-.237-.194.476-.569.874-1.124 1.196-.557.32-1.249.505-2.074.555z"/>
                          </svg>
                        </div>
                      </Tween>
                      <Timeline
                        target={
                          <div className="heading">
                            <h2>Education</h2>
                          </div>
                        }
                      >
                        <Tween
                          from={{ opacity: 0 }}
                          to={{ opacity: 1 }}
                        />
                        <Tween
                          to={{ x: '110%', opacity: 0 }}  
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