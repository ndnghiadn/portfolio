import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Title from './Title'

const Content = () => {
  let line1 = useRef(null)

  useEffect(() => {
    gsap.from([line1], 0.6, {
      delay: 0.9,
      ease: 'power3.out',
      y: 24,
      stagger: {
        amount: 0.15,
      },
    })
  }, [line1])

  return (
    <div className="content">

      <section id="#" className="section">
        <Title lineContent="With-GSAP" lineContent2="Using NEXT" />
        
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
      <section id="education" className="section">
        abc
      </section>
      <section id="projects" className="section">
        xyz
      </section>
      <section id="certifications" className="section">
        qwe
      </section>
      
    </div>
  )
}

export default Content
