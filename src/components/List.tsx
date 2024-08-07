const foods: string[] = ["Rice", "Beans", "Garri", "Egusi", "Okra", "Bread"];
export default function List() {
  return (
    <div className="max-w-screen-lg  mx-auto">
      <ul className="list-inside  list-decimal">
        {foods.map((food, i) => (
          <li key={i}>{food}</li>
        ))}
      </ul>
    </div>
  );
}
