export default function FilterBar({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  categories,
  clearFilters
}) {
  return (
    <div className="filters">
      <input
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map(c => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="low-high">Low → High</option>
        <option value="high-low">High → Low</option>
      </select>

      <button onClick={clearFilters}>Clear Filters</button>
    </div>
  );
}
