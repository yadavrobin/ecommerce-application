import ProductCard from "./ProductCard";

export default function ProductList({ products, cart, onAdd }) {
  return (
    <div className="products">
      <div className="product-grid">
        {products.map(p => {
          const itemInCart = cart.find(i => i.id === p.id);
          const cartQty = itemInCart ? itemInCart.quantity : 0;

          return (
            <ProductCard
              key={p.id}
              product={p}
              cartQty={cartQty}
              onAdd={onAdd}
            />
          );
        })}
      </div>
    </div>
  );
}
