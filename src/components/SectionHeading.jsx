export default function SectionHeading({ eyebrow, children, id }) {
  return (
    <div className="section-heading">
      <span aria-hidden="true">—</span>
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 id={id}>{children}</h2>
      </div>
      <span aria-hidden="true">—</span>
    </div>
  )
}
