import Icon from './Icon'
import ImageWithFallback from './ImageWithFallback'

export default function Hero() {
  return (
    <section id="inicio" className="hero section">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-text">
          <span className="eyebrow">Sabor cochabambino</span>
          <h1>Comida rápida,<br /><span>hecha en Bolivia.</span></h1>
          <p>Rápida, rica y hecha para ti. Disfruta los sabores bolivianos que amas, preparados con ingredientes locales y frescos.</p>
          <div className="hero-actions">
            <a href="#menu" className="btn btn-primary">Ver menú <Icon>arrow_forward</Icon></a>
            <a href="#promociones" className="btn btn-light">Ver promociones</a>
          </div>
        </div>
        <div className="hero-image-wrap">
          <div className="hero-circle" />
          <ImageWithFallback
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdf6hBJkWqggSkEPhd0JE9tW8vvNpjhIRo4JhoOYq1OsqgCKffZ1xlbGntPD25Qf24fOr1nWtUHgCcgV8d6aAmAPVxY-iVlFUelBRSlNoOnXpR_frGUHrZGrRJXSa7u5H7v-QByTj73luX9O5ama7JdIPsnTtguy7wnhALP032vYzROaFusnrKm9EfLPyC6SNS0XBjdFHiDQ6ZDA-65uaLSwbccF2QSG2If2AuWOV8iv8cz6T8gDlsvg"
            alt="Pique Macho, plato estrella de Cochala Bistro"
            className="hero-food"
          />
          <div className="hero-badge">
            <Icon>local_fire_department</Icon>
            <div><small>Más pedido</small><strong>Pique Macho</strong></div>
          </div>
        </div>
      </div>
    </section>
  )
}
