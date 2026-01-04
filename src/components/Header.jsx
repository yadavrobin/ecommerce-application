import { ShoppingCart } from 'lucide-react';

export default function Header({ totalItems, totalPrice }) {
  return (
    <header className="header">
      <div className="header-inner">
        <h2>Mini Shop</h2>
        <div className="cart-summary">
          <ShoppingCart size={18} />
          <span>{totalItems}</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </header>
  );
}
