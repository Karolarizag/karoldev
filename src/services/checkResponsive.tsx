/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useCallback, useEffect } from 'react'

export const checkResponsive = (width: number, min?: boolean) => {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback((e: { matches: any }) => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const minWidth = `(min-width:${width}px)`
      const maxWidth = `(max-width:${width}px)`
      const media = window.matchMedia(min ? minWidth : maxWidth)
      media.addListener(updateTarget)

      if (media.matches) {
        setTargetReached(true)
      }

      return () => media.removeListener(updateTarget)
    }
  }, [min, updateTarget, width])

  return targetReached
}
