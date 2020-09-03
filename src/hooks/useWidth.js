import { useState, useEffect } from 'react'

export default function useWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleWidth)
    return () => window.removeEventListener('resize', handleWidth)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleWidth = () => {
    setWidth(window.innerWidth)
  }

  return width
}
