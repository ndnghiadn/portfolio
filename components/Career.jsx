import React from 'react'
import { Chrono } from "react-chrono"
import items from '../data-json/education-timelines.json'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { useRouter } from 'next/router'

const Career = () => {
  const router = useRouter()

  return (
        <div className="Career--container">
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

            </div>
        </div>
  )
}

export default Career