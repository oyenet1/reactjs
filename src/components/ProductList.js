const products = [
  { id: 1, name: "Adubs", price: 345.67, category: "Food" },
  { id: 2, name: "Maggi", price: 345.67, category: "Seasonings" },
  { id: 3, name: "Salt", price: 345.67, category: "Seasonings" },
  { id: 4, name: "Rice", price: 345.67, category: "Food" },
  { id: 5, name: "SPagetti", price: 345.67, category: "Food" },
];

function ProductList() {
  //   const listItems = products.map((product) => (
  //     <li key="product.name">{product.name}</li>
  //   ));
  return (
    <div>
      <ul className="list-disc list-inside">
        {products.map((product) => (
          <li
            key="product.id"
            className="flex justify-between max-w-sm space-x-3"
          >
            <p>{product.name}</p>
            <p>{"Price: " + Math.round(product.price, 1)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
