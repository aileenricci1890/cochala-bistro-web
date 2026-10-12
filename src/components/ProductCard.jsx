import Icon from './Icon'
import ImageWithFallback from './ImageWithFallback'
import OrderButton from './OrderButton'

export default function ProductCard({ product, onOrder, featured = false }) {
  return (
    <article className={`product-card${featured ? ' featured-product' : ' menu-card'}`}>
      <ImageWithFallback src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-bottom">
          <strong>Bs. {product.price}</strong>
          {featured ? (
            <OrderButton productName={product.name} onOrder={onOrder} className="add-btn" label={`Pedir ${product.name}`}>
              <Icon>add</Icon>
            </OrderButton>
          ) : (
            <OrderButton productName={product.name} onOrder={onOrder} className="order-btn" label={`Pedir ${product.name}`}>Pedir</OrderButton>
          )}
        </div>
      </div>
    </article>
  )
}
