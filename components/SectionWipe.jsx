import React from 'react'
import { Timeline, Tween } from 'react-gsap'
import { Controller, Scene } from 'react-scrollmagic'
import AboutMe from './AboutMe'

const SectionWipe = () => {
  return (
    <div className="Section--container">
        <Controller>
            <Scene
            triggerHook="onLeave"
            duration="300%"
            pin
            >
            <Timeline
                wrapper={<div id="pinContainer" />}
            >
                <AboutMe className="panel" />
                <Tween
                from={{ y: '0%' }}
                to={{ y: '-100%' }}
                >
                <section className="panel bg">
                    <img src="https://en.bloggif.com/tmp/e4014c30bae9d260a233e34fef7328dc/text.gif" alt="Hi" />
                    <div className="arrow-down">
                        <a href="#aboutme"><span></span>Scroll</a>
                    </div>
                </section>
                </Tween>
            </Timeline>
            </Scene>
        </Controller>
    </div>
  )
}

export default SectionWipe