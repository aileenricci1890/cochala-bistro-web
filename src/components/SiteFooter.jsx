import logo from '../assets/logo-cochala-bistro.svg'

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#inicio" className="brand footer-brand">
            <img src={logo} alt="" />
            <span>Cochala Bistro</span>
          </a>
          <p>Comida rápida<br />hecha en Cochabamba.</p>
        </div>
        <div><h3>Encuéntranos</h3><p>Av. América Este<br />Cochabamba, Bolivia</p></div>
        <div><h3>Síguenos</h3><div className="socials"><span>Instagram</span><span>Facebook</span></div></div>
        <div><h3>Contáctanos</h3><p>707 00000</p><a href="#ubicaciones">Escríbenos por WhatsApp</a></div>
      </div>
      <div className="container copyright">© 2026 Cochala Bistro. Todos los derechos reservados.</div>
    </footer>
  )
}
