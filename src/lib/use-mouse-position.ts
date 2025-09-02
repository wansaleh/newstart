/* eslint-disable react-hooks/exhaustive-deps */
import type { CSSProperties } from 'react'
import { useMotionTemplate, useMotionValue } from 'framer-motion'
import { useEffect } from 'react'

interface UseMousePositionProps {
  target: React.RefObject<HTMLElement>
  includeTouch?: boolean
}

export default function useMousePosition({
  target,
  includeTouch = false,
}: UseMousePositionProps) {
  const motionX = useMotionValue<number | null>(null)
  const motionY = useMotionValue<number | null>(null)

  useEffect(() => {
    if (!target.current) {
      return
    }

    const updateMousePosition = (ev: MouseEvent | TouchEvent) => {
      let x: number, y: number
      if ('touches' in ev) {
        const touch = (ev as TouchEvent).touches[0];
        [x, y] = [touch.clientX, touch.clientY]
      }
      else {
        [x, y] = [(ev as MouseEvent).clientX, (ev as MouseEvent).clientY]
      }
      motionX.set(x)
      motionY.set(y)
    }

    target.current?.addEventListener('mousemove', updateMousePosition)
    if (includeTouch) {
      target.current?.addEventListener('touchmove', updateMousePosition)
    }

    return () => {
      target.current?.removeEventListener('mousemove', updateMousePosition)
      if (includeTouch) {
        target.current?.removeEventListener('touchmove', updateMousePosition)
      }
    }
  }, [target, includeTouch, motionX, motionY])

  return {
    x: motionX,
    y: motionY,
    styles: {
      '--mx': useMotionTemplate`${motionX}px`,
      '--my': useMotionTemplate`${motionY}px`,
    } as CSSProperties,
  }
}
