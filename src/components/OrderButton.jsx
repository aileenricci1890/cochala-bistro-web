export default function OrderButton({ productName, onOrder, children, className = 'btn btn-primary', label }) {
  return (
    <button
      className={className}
      type="button"
      data-product={productName}
      aria-label={label}
      onClick={() => onOrder(productName)}
    >
      {children}
    </button>
  )
}
