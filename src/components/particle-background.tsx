'use client'

import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: { value: '#0f0f0f' },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'attract',
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            attract: {
              distance: 100,
              duration: 0.6,
            },
            push: {
              quantity: 4,
            },
          },
        },
        particles: {
          number: {
            value: 50,
            density: { enable: true, area: 500 },
          },
          color: { value: '#00ffff' },
          links: {
            enable: true,
            distance: 150,
            color: '#00ffff',
            opacity: 0.4,
            width: 1,
            blink: false,
            consent: false,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            outModes: 'bounce',
          },
          size: {
            value: { min: 1, max: 3 },
          },
          opacity: {
            value: 0.5,
          },
        },
      }}
    />
  )
}
