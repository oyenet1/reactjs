import ProductList from "./components/ProductList";
import "./index.css";

// import "./NavBar";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="max-w-5xl mx-auto App">
      <NavBar />
      <header className="App-header">
        <h1 className="p-2 text-3xl font-medium text-center text-green-500">
          Components
        </h1>
      </header>
      <section className="max-w-sm p-3 rounded-md shadow bg-gray-50">
        <p className="pb-3 text-2xl font-medium">List of Items in React</p>
        <ProductList />
      </section>
    </div>
  );
}

export default App;
