"use client"

import { useEffect, useRef } from "react"

interface Bubble {
  x: number
  y: number
  radius: number
  speed: number
  opacity: number
  popping: boolean
  popProgress: number
}

const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let bubbles: Bubble[] = []
    let animationId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createBubble = (): Bubble => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 20 + 10,
      speed: Math.random() * 1.5 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      popping: false,
      popProgress: 0,
    })

    const initBubbles = () => {
      const bubbleCount = Math.floor((canvas.width * canvas.height) / 10000)
      bubbles = Array.from({ length: bubbleCount }, createBubble)
    }

    const drawBubble = (bubble: Bubble) => {
      ctx.beginPath()
      ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2)
      const gradient = ctx.createRadialGradient(
        bubble.x - bubble.radius * 0.3,
        bubble.y - bubble.radius * 0.3,
        bubble.radius * 0.1,
        bubble.x,
        bubble.y,
        bubble.radius,
      )
      gradient.addColorStop(0, `rgba(255, 255, 255, ${bubble.opacity * 0.8})`)
      gradient.addColorStop(0.9, `rgba(255, 255, 255, ${bubble.opacity * 0.3})`)
      gradient.addColorStop(1, `rgba(255, 255, 255, ${bubble.opacity * 0.1})`)
      ctx.fillStyle = gradient
      ctx.fill()

      // Add highlight
      ctx.beginPath()
      ctx.arc(bubble.x - bubble.radius * 0.3, bubble.y - bubble.radius * 0.3, bubble.radius * 0.1, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity * 0.8})`
      ctx.fill()

      if (bubble.popping) {
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.radius * (1 + bubble.popProgress * 0.5), 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - bubble.popProgress) * bubble.opacity})`
        ctx.lineWidth = 2
        ctx.stroke()
      }
    }

    const updateBubbles = () => {
      bubbles.forEach((bubble) => {
        if (bubble.popping) {
          bubble.popProgress += 0.05
          if (bubble.popProgress >= 1) {
            Object.assign(bubble, createBubble())
          }
        } else {
          bubble.y -= bubble.speed
          bubble.x += Math.sin(bubble.y * 0.05) * 0.5

          if (bubble.y + bubble.radius < 0) {
            Object.assign(bubble, createBubble())
            bubble.y = canvas.height + bubble.radius
          }

          // Start popping when near the top
          if (bubble.y < canvas.height * 0.2 && Math.random() < 0.01) {
            bubble.popping = true
            bubble.popProgress = 0
          }
        }
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      updateBubbles()
      bubbles.forEach(drawBubble)
      animationId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      const oldWidth = canvas.width
      const oldHeight = canvas.height

      resizeCanvas()

      // Adjust bubble positions proportionally to new screen size
      bubbles.forEach((bubble) => {
        bubble.x = (bubble.x / oldWidth) * canvas.width
        bubble.y = (bubble.y / oldHeight) * canvas.height
      })
    }

    window.addEventListener("resize", handleResize)
    resizeCanvas()
    initBubbles() // Initialize bubbles only once
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

export default Particles

