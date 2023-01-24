import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin'
import Image from 'next/image'

const Fish = () => {
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)

    gsap.defaults({ ease: 'none' })

    const rotateFish = (self: any) => {
      if (self.direction === -1) {
        gsap.to('.fish', { rotationY: 180, duration: 0.4 })
      } else {
        gsap.to('.fish', { rotationY: 0, duration: 0.4 })
      }
    }
    let duration = 10
    if (window.matchMedia('(max-width: 600px)').matches) {
      duration = 5
    }
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.fish-wrapper',
          scrub: true,
          start: 'top center',
          /* end: 'bottom center', */
          onUpdate: (self) => rotateFish(self),
        },
      })
      .to(
        '.fish',
        {
          motionPath: {
            path: '.fish-path',
            align: '.fish-path',
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
          },

          duration: 10,
          immediateRender: true,
        },
        0
      )
  }, [])

  //change the path length if the screen is smaller than 600px
  useEffect(() => {
    const changePathLength = () => {
      if (window.matchMedia('(max-width: 600px)').matches) {
        gsap.set('.fish-path', {
          attr: {
            d: 'M1990.19 8C2623.12 448.159 2988.64 1363.04 2971.42 2144.67C2941.57 3498.84 1549.23 4270.95 995.848 4596.52C380.707 4958.43 8.99958 5164.92 9 5706.15C9.00046 6308.25 314.23 6429.97 995.848 6965.77C1352.62 7246.22 2391.85 8027.58 2662.44 8675.32C2869.47 9170.91 2677.76 9804 1713.38 9804H427.603',
          },
        })
      } else {
        gsap.set('.fish-path', {
          attr: {
            d: 'M1067 8C1405 210.5 1600.2 631.4 1591 991C1575.06 1614 831.52 1969.22 536 2119C207.5 2285.5 8.99978 2380.5 9 2629.5C9.00025 2906.5 172 2962.5 536 3209C726.525 3338.02 1281.5 3697.5 1426 3995.5C1536.56 4223.5 1511.5 4519.5 996.5 4519.5',
          },
        })
      }
    }
    window.addEventListener('resize', changePathLength)
    return () => window.removeEventListener('resize', changePathLength)
  }, [])

  return (
    <div className='fish-wrapper absolute top-[80vh] w-full h-full lg:w-[1601px] lg:h-[4529px]'>
      <svg
        viewBox='0 0 1601 4529'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          className='fish-path'
          d='M1067 8C1405 210.5 1600.2 631.4 1591 991C1575.06 1614 831.52 1969.22 536 2119C207.5 2285.5 8.99978 2380.5 9 2629.5C9.00025 2906.5 172 2962.5 536 3209C726.525 3338.02 1281.5 3697.5 1426 3995.5C1536.56 4223.5 1511.5 4519.5 996.5 4519.5'
          stroke='#FF0000'
          strokeWidth='0'
        />
      </svg>

      <div className='fish absolute top-0 right-36'>
        <Image
          src='/images/fish.png'
          width={300}
          height={100}
          alt='fish'
          className='w-[100px] md:w-[200px] lg:w-[300px]'
        />
      </div>
    </div>
  )
}

export default Fish
