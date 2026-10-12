import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function HowItWorks({ steps }) {
  return (
    <section className="how section section-soft" aria-labelledby="how-heading">
      <div className="container">
        <SectionHeading id="how-heading">¿Cómo funciona?</SectionHeading>
        <div className="steps">
          {steps.map((step, index) => (
            <article className="step" key={step.title}>
              <span>{index + 1}</span>
              <Icon className="step-icon">{step.icon}</Icon>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
