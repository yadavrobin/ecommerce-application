import { X } from 'lucide-react';

export default function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <div className="border p-3 rounded">
      <div className="flex justify-between">
        <span>{item.name}</span>
        <button onClick={() => onRemove(item.id)}><X size={16} /></button>
      </div>
      <div className="flex gap-2">
        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
      </div>
    </div>
  );
}
