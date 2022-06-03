import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import items from '../data-json/education-timelines.json'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { Timeline, Tween } from 'react-gsap'

const Education = () => {
  const router = useRouter()

  return (
        <div className="Education--container">

              <VerticalTimeline className="Timeline--container">
                {
                  items.map((item, index) => (
                    <VerticalTimelineElement
                      key={index}
                      className="vertical-timeline-element--work Timeline--item"
                      contentStyle={{ background: 'rgb(51, 163, 238)', color: '#fff' }}
                      iconStyle={{ background: 'rgb(51, 163, 238)', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                      date={item.date}
                    >
                      <h3 className="vertical-timeline-element-title">{ item.title }</h3>
                      <h4 className="vertical-timeline-element-subtitle">{ item.subTitle }</h4>
                      {
                        item.desc && (
                          <p>{ item.desc }</p>
                        )
                      }
                    </VerticalTimelineElement>
                  ))
                }
                <VerticalTimelineElement
                  iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                />
              </VerticalTimeline>

              <Timeline target={
                        <div className="Education--footer">
                          <div className="next--page" onClick={() => router.push('/')}>
                            <p>{'<AboutMe />'}</p>
                              <AiOutlineArrowLeft />
                          </div>
                          <div className="next--page" onClick={() => router.push('/career')}>
                            <p>{'<Career />'}</p>
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

export default Education