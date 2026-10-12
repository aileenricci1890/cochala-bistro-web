import ProductCard from './ProductCard'
import SectionHeading from './SectionHeading'

export default function Menu({ products, filters, activeFilter, onFilterChange, onOrder }) {
  const visibleProducts = activeFilter === 'todos'
    ? products
    : products.filter((product) => product.category === activeFilter)

  return (
    <section id="menu" className="menu-section section" aria-labelledby="menu-title">
      <div className="container">
        <SectionHeading id="menu-title">Nuestro menú</SectionHeading>
        <div className="filter-buttons" role="group" aria-label="Filtrar menú por categoría">
          {filters.map((filter) => (
            <button
              className={`filter-btn${activeFilter === filter.value ? ' active' : ''}`}
              type="button"
              key={filter.value}
              aria-pressed={activeFilter === filter.value}
              onClick={() => onFilterChange(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        {visibleProducts.length ? (
          <div className="menu-grid">
            {visibleProducts.map((product) => <ProductCard key={product.name} product={product} onOrder={onOrder} />)}
          </div>
        ) : (
          <p className="empty-menu">Pronto tendremos productos en esta categoría.</p>
        )}
      </div>
    </section>
  )
}
