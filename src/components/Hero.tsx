'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Typed from 'typed.js'

const Hero = () => {
  useEffect(() => {
    const typed = new Typed('.typed-subtitle', {
      strings: ['UX/UI Designer and Front-end Director.', 'Based in Kiev.'],
      loop: true,
      typeSpeed: 80
    })

    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <div className="section started" style={{ height: '96vh' }}>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <div className="h-title glitch-effect" data-text="I'm John Doe">
              I'm <span>John Doe</span>
            </div>
            <span className="typed-subtitle" />
          </div>
        </div>
      </div>

      <Link href="#" className="mouse_btn">
        <span className="ion ion-mouse"></span>
      </Link>
    </div>
  )
}
export default Hero
