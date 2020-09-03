import { useState, useEffect } from 'react'
import useWidth from './useWidth'

export default function useMobile() {
  const width = useWidth()
  const [mobile, setMobile] = useState(window.innerWidth < 600)

  useEffect(() => {
    setMobile(width < 600)
  }, [width]) // eslint-disable-line react-hooks/exhaustive-deps

  return mobile
}
