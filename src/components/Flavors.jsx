import FlavorCard from './FlavorCard'
import SectionHeading from './SectionHeading'

export default function Flavors({ products }) {
  return (
    <section id="sabores" className="flavors section section-soft">
      <div className="container">
        <SectionHeading>Sabores de Cochabamba</SectionHeading>
        <p className="flavors-intro">Descubre de qué está hecho cada plato y dónde se disfruta en Cochabamba.</p>
        <div className="flavor-grid">
          {products.map((product) => <FlavorCard key={product.name} product={product} />)}
        </div>
      </div>
    </section>
  )
}
