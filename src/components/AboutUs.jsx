import ImageWithFallback from './ImageWithFallback'

export default function AboutUs() {
  return (
    <section id="nosotros" className="about section section-soft">
      <div className="container about-grid">
        <ImageWithFallback
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYJDxh1PV7NZ9208D2zNiV-U1MZOJXDNf2Um0ZXlkgxPOYLzVf9_kJ32yKF3i_8rtFvYVRtsjeEI_1mtH2k3eBPTYEDf_Tq9Ze1jThunWIqhK8Gh-Fgkv-kPstjqLEF6Ib3A99ZPSBYcdNQavcx59jyZyyA6SlajkfBGH1WYinDopcaO1YtAEfj53A9-gcO82QNKE1DF6uUWzsYiTL4W_dQ3pHVAt0i9l24WGCPlFho6BxzXfAYUO_Yw"
          alt="Preparación de comida boliviana en Cochala Bistro"
          className="about-image"
        />
        <div className="about-text">
          <span className="eyebrow">Sobre nosotros</span>
          <h2>El sabor de Bolivia, directo a tu mesa.</h2>
          <p>En Cochala Bistro celebramos la comida boliviana con una propuesta rápida, rica y cercana.</p>
          <p>Nuestro menú reúne sabores tradicionales de diferentes regiones de Bolivia en un espacio pensado para disfrutar, compartir y pedir fácilmente.</p>
          <p>Queremos que cada plato conserve ese sabor casero y auténtico que nos representa.</p>
        </div>
      </div>
    </section>
  )
}
