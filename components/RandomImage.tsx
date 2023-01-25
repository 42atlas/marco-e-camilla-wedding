import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface Props {
  src: string
}

const ImagePopup: React.FunctionComponent<Props> = ({ src }) => {
  const [showImage, setShowImage] = useState(false)
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 })
  const imageWidth = 100
  const imageHeight = 150

  useEffect(() => {
    setInterval(() => {
      setShowImage(!showImage)
      setImagePosition({
        x: Math.floor(Math.random() * (window.innerWidth - imageWidth)),
        y: Math.floor(Math.random() * (window.innerHeight - imageHeight)),
      })
    }, 5000)
  }, [showImage])

  return (
    <div className='fixed top-0 left-0 w-full h-full'>
      {showImage && (
        <Image
          src={src}
          className='absolute'
          style={{
            top: imagePosition.y,
            left: imagePosition.x,
            transition: 'all 1s ease-in-out',
          }}
          height={imageHeight}
          width={imageWidth}
          alt='Random'
        />
      )}
    </div>
  )
}

export default ImagePopup
