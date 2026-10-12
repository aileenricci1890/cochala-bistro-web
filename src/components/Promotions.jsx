import OrderButton from './OrderButton'
import SectionHeading from './SectionHeading'

export default function Promotions({ promotions, onOrder }) {
  return (
    <section id="promociones" className="promotions section">
      <div className="container">
        <SectionHeading>Promociones</SectionHeading>
        <div className="promo-grid">
          {promotions.map((promotion, index) => (
            <article className={`promo-card${index === 0 ? ' promo-main' : ' promo-secondary'}`} key={promotion.name}>
              <span className="promo-tag">{promotion.tag}</span>
              <h3>{promotion.title}</h3>
              <p>{promotion.description}</p>
              <div className="promo-price">
                <strong>Bs. {promotion.price}</strong>
                {promotion.previousPrice && <del>Bs. {promotion.previousPrice}</del>}
              </div>
              <OrderButton
                productName={promotion.name}
                onOrder={onOrder}
                className={`btn ${index === 0 ? 'btn-dark' : 'btn-light'}`}
              >
                {index === 0 ? 'Añadir a la orden' : 'Pedir promo'}
              </OrderButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
