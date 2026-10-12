import { useState } from 'react'
import Icon from './Icon'

export default function ImageWithFallback({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`image-frame ${className}`}>
      {failed ? (
        <div className="image-fallback" role="img" aria-label={alt}>
          <Icon>restaurant</Icon>
          <span>{alt}</span>
        </div>
      ) : (
        <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      )}
    </div>
  )
}
