import ProductList from "./components/ProductList";
import Click from "./components/Click";
import "./index.css";

// import "./NavBar";
import NavBar from "./NavBar";

function App() {
  let show = false;
  const toggleMe = () => {
    alert(!show);
    console.log((show = !show));
  };
  return (
    <div className="max-w-5xl mx-auto space-y-4 App">
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
      <article>
        <h1 className="py-2 text-2xl">Event Components</h1>
        <button
          onClick={toggleMe}
          className="px-6 py-2 text-sm text-white bg-pink-600 rounded"
        >
          Click me
        </button>
        {show ? <Click /> : ""}
      </article>
    </div>
  );
}

export default App;
