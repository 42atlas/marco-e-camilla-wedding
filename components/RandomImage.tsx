import React, { useState, useEffect } from 'react'

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
  }, [])

  return (
    <div className='fixed top-0 left-0 w-full h-full'>
      {showImage && (
        <img
          src={src}
          className='absolute'
          style={{
            top: imagePosition.y,
            left: imagePosition.x,
            transition: 'all 1s ease-in-out',
            width: imageWidth,
            height: imageHeight,
          }}
          alt='Random'
        />
      )}
    </div>
  )
}

export default ImagePopup
