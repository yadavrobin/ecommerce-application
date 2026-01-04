import { useState, useMemo } from 'react';
import { PRODUCTS } from './data/products';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

export default function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');

  const categories = useMemo(
    () => [...new Set(PRODUCTS.map(p => p.category))],
    []
  );

  const filteredProducts = useMemo(() => {
    let data = [...PRODUCTS];

    if (search) {
      data = data.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      data = data.filter(p => p.category === category);
    }

    if (sort === 'low-high') {
      data.sort((a, b) => a.price - b.price);
    }

    if (sort === 'high-low') {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [search, category, sort]);

  const addToCart = product => {
    setCart(prev => {
      const found = prev.find(i => i.id === product.id);
      if (found) {
        if (found.quantity < product.stock) {
          return prev.map(i =>
            i.id === product.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          );
        }
        return prev;
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    setCart(prev =>
      qty <= 0
        ? prev.filter(i => i.id !== id)
        : prev.map(i =>
            i.id === id ? { ...i, quantity: qty } : i
          )
    );
  };

  const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <>
      <Header totalItems={totalItems} totalPrice={totalPrice} />

      <div className="container">
        <div className="main-grid">
          <div>
            <FilterBar
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              sort={sort}
              setSort={setSort}
              categories={categories}
              clearFilters={() => {
                setSearch('');
                setCategory('');
                setSort('');
              }}
            />

            <ProductList
              products={filteredProducts}
              cart={cart}
              onAdd={addToCart}
            />
          </div>

          <Cart
            cart={cart}
            updateQty={updateQty}
            totalItems={totalItems}
            totalPrice={totalPrice}
          />
        </div>
      </div>
    </>
  );
}
