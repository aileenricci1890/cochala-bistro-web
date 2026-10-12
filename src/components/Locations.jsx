import Icon from './Icon'
import OrderButton from './OrderButton'
import SectionHeading from './SectionHeading'

export default function Locations({ onOrder }) {
  return (
    <section id="ubicaciones" className="locations section">
      <div className="container">
        <SectionHeading>Ubicaciones</SectionHeading>
        <div className="location-card">
          <div className="location-info">
            <Icon className="location-icon">location_on</Icon>
            <div>
              <h3>Cochala Bistro</h3>
              <p>Av. América Este<br />Cochabamba, Bolivia</p>
              <p><strong>Horario:</strong><br />Lun. a dom. · 11:00 a 23:00</p>
            </div>
          </div>
          <div className="map-box">
            <Icon>map</Icon>
            <p>Encuéntranos en Cochabamba</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Av.+America+Este+Cochabamba+Bolivia" target="_blank" rel="noreferrer">Abrir en Google Maps</a>
          </div>
        </div>
        <div className="final-cta">
          <h2>¿Listo para pedir?</h2>
          <p>Tu comida favorita, en minutos.</p>
          <OrderButton productName="Pedido general" onOrder={onOrder} className="btn btn-whatsapp">
            <Icon>chat</Icon> Hacer mi pedido
          </OrderButton>
        </div>
      </div>
    </section>
  )
}
