import { useState, useEffect } from 'react'

export default function useWidth() {
  const [width, setWidth] = useState(window.innerWidth)
  const [mobile, setMobile] = useState(window.innerWidth < 650)

  useEffect(() => {
    window.addEventListener('resize', handleWidth)
    return () => window.removeEventListener('resize', handleWidth)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleWidth = () => {
    setWidth(window.innerWidth)
    if (mobile && window.innerWidth > 650) {
      setMobile(false)
    } else if (!mobile && window.innerWidth < 650) {
      setMobile(true)
    }
  }

  return { width, mobile }
}
