
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'

const AboutMe = ({ className }) => {

  let title = useRef(null)
  let desc = useRef(null)
  let image = useRef(null)
  let icons = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(require('gsap/ScrollTrigger'))

    gsap.from([title], 0.6, {
      scrollTrigger: {
        trigger: [title],
        start: '2vh 80%',
        end: 'bottom 10vh',
        toggleActions: "restart pause restart pause",
      },
      delay: 0.3,
      ease: 'power3.easeInOut',
      y: 24,
      stagger: {
        amount: 0.15,
      },
      opacity: 0,
    })

    gsap.from([desc], 0.6, {
      scrollTrigger: {
        trigger: [desc],
        start: 'top center',
        end: 'bottom 10vh',
        toggleActions: "restart pause restart pause",
      },
      delay: 0.6,
      ease: 'power3.easeInOut',
      y: 24,
      stagger: {
        amount: 0.15,
      },
      opacity: 0,
    })

    gsap.from([image], 0.6, {
      scrollTrigger: {
        trigger: [image],
        start: '2vh 80%',
        end: 'bottom 10vh',
        toggleActions: "restart pause restart pause",
      },
      delay: 0.1,
      ease: 'power3.easeInOut',
      x: 24,
      stagger: {
        amount: 0.15,
      },
      opacity: 0,
    })

    gsap.from([icons], 0.6, {
      scrollTrigger: {
        trigger: [icons],
        start: '2vh 80%',
        end: 'bottom 10vh',
        toggleActions: "restart pause restart pause",
      },
      delay: 0.9,
      ease: 'power3.easeInOut',
      x: -24,
      stagger: {
        amount: 0.15,
      },
      opacity: 0,
    })

  }, [])

  return (
    <section id="aboutme" className={className}>
      <div className='AboutMe--container'>
        <div className="info">
          <h2 ref={(el) => (title = el)} className="title">About Me</h2>
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
      </div>
    </section>
  )
}

export default AboutMe