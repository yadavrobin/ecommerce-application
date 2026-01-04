export default function ProductCard({ product, cartQty, onAdd }) {
  const remainingStock = product.stock - cartQty;
  const outOfStock = remainingStock <= 0;

  return (
    <div className="product-card">
      <h4>{product.name}</h4>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>

      <p>
        Stock:{" "}
        <strong>
          {outOfStock ? "Out of stock" : remainingStock}
        </strong>
      </p>

      <button
        disabled={outOfStock}
        onClick={() => onAdd(product)}
      >
        {outOfStock ? "Out of Stock" : "Add to Cart"}
      </button>
    </div>
  );
}
