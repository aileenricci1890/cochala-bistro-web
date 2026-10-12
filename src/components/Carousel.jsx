import { useEffect, useState } from 'react'
import ImageWithFallback from './ImageWithFallback'

export default function Carousel({ label, slides }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || slides.length < 2) return undefined
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length)
    }, 4000)
    return () => window.clearInterval(timer)
  }, [activeIndex, paused, slides.length])

  function goTo(index) {
    setActiveIndex((index + slides.length) % slides.length)
  }

  return (
    <div
      className="carousel"
      aria-roledescription="carrusel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)
      }}
    >
      <div className="carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {slides.map((slide) => (
          <div className="carousel-slide" key={slide.caption}>
            <ImageWithFallback src={slide.image} alt={slide.caption} className="carousel-image" />
            <span className="slide-caption">{slide.caption}</span>
          </div>
        ))}
      </div>
      <button className="carousel-prev" type="button" aria-label="Foto anterior" onClick={() => goTo(activeIndex - 1)}>‹</button>
      <button className="carousel-next" type="button" aria-label="Foto siguiente" onClick={() => goTo(activeIndex + 1)}>›</button>
      <div className="carousel-dots" aria-label="Elegir foto">
        {slides.map((slide, index) => (
          <button
            className={`carousel-dot${activeIndex === index ? ' active' : ''}`}
            type="button"
            key={slide.caption}
            aria-label={`Mostrar ${slide.caption}`}
            aria-current={activeIndex === index ? 'true' : undefined}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  )
}
