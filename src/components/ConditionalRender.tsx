interface FoodItem {
  name: string;
  price: number;
  isAvailable: boolean;
}

const foodItems: FoodItem[] = [
  { name: "Rice", price: 20, isAvailable: true },
  { name: "Beans", price: 30, isAvailable: false },
  { name: "Garri", price: 10, isAvailable: true },
  { name: "Egusi", price: 21, isAvailable: false },
  { name: "Okra", price: 14, isAvailable: false },
  { name: "Bread", price: 25, isAvailable: true },
];

export default function List() {
  return (
    <div className="max-w-screen-lg space-y-4 mx-auto">
      <h1 className="tex-2xl">List of Foods</h1>
      <ul className="list-inside  list-decimal">
        {foodItems.map(
          (food, i) => food.isAvailable && <li key={i}>{food.name}</li>
        )}
      </ul>
    </div>
  );
}
