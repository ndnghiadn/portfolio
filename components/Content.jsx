import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Title from './Title'

const Content = () => {

  let line1 = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(require('gsap/ScrollTrigger'))
    gsap.from([line1], 0.6, {
      scrollTrigger: {
        trigger: [line1],
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
    })
  }, [line1])

  return (
    <div className="content">

      <section className="section">

        {/* <Title lineContent="Nghia Nguyen" lineContent2="Frontend WebDev" /> */}
        
      </section>
      <section id="education" className="section">
        education
        <p ref={(el) => (line1 = el)} className="line">
          A Simple example using{' '}
          <a
            href="https://greensock.com/gsap/"
            style={{ fontWeight: 'bold', textDecoration: 'none' }}
          >
            GSAP
          </a>{' '}
          &{' '}
          <a
            href="https://www.npmjs.com/package/react-transition-group"
            style={{ fontWeight: 'bold', textDecoration: 'none' }}
          >
            react-transition-group
          </a>
        </p>
      </section>
      <section id="career" className="section">
        career
      </section>
      <section id="projects" className="section">
        projects
      </section>
      <section id="contact" className="section">
        contact
      </section>
      
    </div>
  )
}

export default Content
