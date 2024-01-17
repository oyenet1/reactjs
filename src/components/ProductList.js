const products = [
  { name: "Adubs", price: 345.67, category: "Food" },
  { name: "Maggi", price: 345.67, category: "Seasonings" },
  { name: "Salt", price: 345.67, category: "Seasonings" },
  { name: "Rice", price: 345.67, category: "Food" },
  { name: "SPagetti", price: 345.67, category: "Food" },
];

function ProductList() {
  //   const listItems = products.map((product) => (
  //     <li key="product.name">{product.name}</li>
  //   ));
  return (
    <div>
      <ul className="list-disc list-inside">
        {products.map((product) => (
          <li key="product.name">{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
