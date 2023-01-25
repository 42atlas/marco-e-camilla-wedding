import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin'
import Image from 'next/image'

const Fish = () => {
  const [duration, setDuration] = useState(10)

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

    const changePathLength = () => {
      if (
        window.matchMedia('(max-width: 750px)').matches /* &&
        window.matchMedia('(min-eight: 430)').matches */
      ) {
        setDuration(40)
        gsap.set('.fish-path', {
          attr: {
            d: 'M1067 8C1405 210.5 1600.2 631.4 1591 991C1575.06 1614 831.52 1969.22 536 2119C207.5 2285.5 8.99978 2380.5 9 2629.5C9.00025 2906.5 182 2952.5 546 3199C736.524 3328.02 1281.5 3664.5 1426 3962.5C1536.56 4190.5 1388.5 4481.5 873.5 4481.5C252.5 4481.5 9.00045 4803 9.00022 5040C9 5277 145.5 5520.4 873.5 5661C1206.5 5725.31 1568 5818.94 1568 6174.5C1568 6603.5 717.167 7292 254.5 7704.5',
          },
        })
      } else {
        setDuration(10)
        gsap.set('.fish-path', {
          attr: {
            d: 'M1067 8C1405 210.5 1600.2 631.4 1591 991C1575.06 1614 831.52 1969.22 536 2119C207.5 2285.5 8.99978 2380.5 9 2629.5C9.00025 2906.5 172 2962.5 536 3209C726.525 3338.02 1281.5 3697.5 1426 3995.5C1536.56 4223.5 1511.5 4519.5 996.5 4519.5',
          },
        })
      }
    }
    window.addEventListener('resize', changePathLength)
    changePathLength()

    console.log(duration)

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

          duration: duration,
          immediateRender: true,
        },
        0
      )
    console.log(duration)
    return () => {
      window.removeEventListener('resize', changePathLength)
    }
  }, [duration])

  //change the path length if the screen is smaller than 600px

  return (
    <div className='fish-wrapper absolute top-[80vh] pl-10 xl:pl-0 w-[80%] h-[80%] xl:w-[1601px] xl:h-[4529px] '>
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
          className='w-[100px] sm:w-[150px] md:w-[200px] lg:w-[300px]'
        />
      </div>
    </div>
  )
}

export default Fish
