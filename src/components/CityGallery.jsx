import Carousel from './Carousel'
import SectionHeading from './SectionHeading'

export default function CityGallery({ carousels }) {
  return (
    <section id="cochabamba" className="city section">
      <div className="container">
        <SectionHeading>Llajta querida</SectionHeading>
        <p className="flavors-intro">La llajta que le da sabor a cada plato de nuestro menú.</p>
        <div className="city-grid">
          {carousels.map((carousel) => <Carousel key={carousel.label} {...carousel} />)}
        </div>
      </div>
    </section>
  )
}
