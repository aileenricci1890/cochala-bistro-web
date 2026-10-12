import ProductCard from './ProductCard'

export default function FeaturedProducts({ products, onOrder }) {
  return (
    <section className="featured section section-soft">
      <div className="container">
        <div className="section-title-row">
          <div><span className="eyebrow">Favoritos</span><h2>Productos destacados</h2></div>
          <a className="text-link" href="#menu">Ver menú completo <span aria-hidden="true">→</span></a>
        </div>
        <div className="product-grid">
          {products.map((product) => <ProductCard key={product.name} product={product} onOrder={onOrder} featured />)}
        </div>
      </div>
    </section>
  )
}
