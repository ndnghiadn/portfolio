import React from 'react'
import { Chrono } from "react-chrono"
import items from '../data-json/education-timelines.json'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { useRouter } from 'next/router'

const Education = () => {
  const router = useRouter()

  return (
        <div className="Education--container">
            <div className="chrono">
              <Chrono 
                items={items}
                disableNavOnKey
                scrollable={{ scrollbar: 'true' }}
                theme={{
                  primary: 'rgb(51, 163, 238)',
                  secondary: 'goldenrod',
                  // cardBgColor: 'yellow',
                  // cardForeColor: 'violet',
                  // titleColor: 'red',
                }}
                fontSizes={{
                  cardText: '1.2rem',
                  cardTitle: '1rem',
                }}
               />

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

            </div>
        </div>
  )
}

export default Education