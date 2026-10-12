import { useState } from 'react'
import ImageWithFallback from './ImageWithFallback'

export default function FlavorCard({ product }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      type="button"
      className={`flavor-card${flipped ? ' is-flipped' : ''}`}
      aria-pressed={flipped}
      aria-label={`${product.name}: ${flipped ? 'ver foto' : 'ver ingredientes y origen'}`}
      onClick={() => setFlipped((value) => !value)}
    >
      <span className="flavor-card-inner">
        <span className="flavor-card-front">
          <ImageWithFallback src={product.image} alt="" className="flavor-image" />
          <span className="flavor-name">{product.name}</span>
          <span className="flavor-hint">Toca para conocer su historia</span>
        </span>
        <span className="flavor-card-back">
          <span className="flavor-title">{product.name}</span>
          <span><strong>Hecho de:</strong> {product.ingredients}</span>
          <span><strong>Dónde encontrarlo:</strong> {product.origin}</span>
        </span>
      </span>
    </button>
  )
}
