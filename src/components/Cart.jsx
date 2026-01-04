export default function Cart({ cart, updateQty, totalItems, totalPrice }) {
  return (
    <div className="cart">
      <h3>Cart</h3>

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <strong>{item.name}</strong>
          <div className="cart-controls">
            <button onClick={() => updateQty(item.id, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQty(item.id, item.quantity + 1)}>+</button>
          </div>
        </div>
      ))}

      <hr />
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
}
