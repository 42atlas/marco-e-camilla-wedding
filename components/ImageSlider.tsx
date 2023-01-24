import Image from 'next/image'
import { useState, useEffect } from 'react'

interface ImageSliderProps {
  images: string[]
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(intervalId)
  }, [currentIndex, images])

  const handlePreviousClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  return (
    <div className='relative h-full w-full'>
      <button
        className='absolute left-0 top-72 m-4 text-3xl font-medium text-white bg-[#E3AB8B] rounded-full p-2 px-3 z-50'
        onClick={handlePreviousClick}
      >
        &#x21AB;
      </button>
      <button
        className='absolute right-0 top-72 m-4 text-3xl font-medium text-white bg-[#E3AB8B] rounded-full p-2 px-3 z-50'
        onClick={handleNextClick}
      >
        &#x21AC;
      </button>
      <div className='relative h-full w-full'>
        {images.map((image, index) => {
          return (
            <Image
              key={index}
              className={`absolute top-00 left-0 w-full h-full object-contain ${
                index === currentIndex ? 'block' : 'hidden'
              }`}
              src={image}
              alt='Slider'
              width={2600}
              height={1800}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ImageSlider
