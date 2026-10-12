import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function Categories({ categories }) {
  return (
    <section className="categories section" aria-labelledby="categories-title">
      <div className="container">
        <SectionHeading id="categories-title">¿Qué estás buscando?</SectionHeading>
        <div className="category-grid">
          {categories.map((category) => (
            <a
              href={category.href}
              className="category-card"
              key={category.title + category.subtitle}
            >
              <Icon>{category.icon}</Icon>
              <strong>{category.title}</strong>
              <small>{category.subtitle}</small>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
