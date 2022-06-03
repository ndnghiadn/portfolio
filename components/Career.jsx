import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import items from '../data-json/career-timelines.json'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { Timeline, Tween } from 'react-gsap'

const Career = () => {
  const router = useRouter()

  return (
        <div className="Career--container">

              <VerticalTimeline className="Timeline--container">
                {
                  items.map((item, index) => (
                    <VerticalTimelineElement
                      key={index}
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: (index + 1) === items.length ? 'goldenrod' : 'rgb(51, 163, 238)', color: '#fff' }}
                      iconStyle={{ background: (index + 1) === items.length ? 'goldenrod' : 'rgb(51, 163, 238)', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                      dateClassName="Timeline--date"
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

              </VerticalTimeline>

              <Timeline target={
                        <div className="Career--footer">
                          <div className="next--page" onClick={() => router.push('/education')}>
                            <p>{'<Education />'}</p>
                              <AiOutlineArrowLeft />
                          </div>
                          <div className="next--page" onClick={() => router.push('/projects')}>
                            <p>{'<Projects />'}</p>
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

export default Career