import "./index.css";

function App() {
  const title = "Learning React Datas";
  let name = "Bowofade";
  const age = 67;
  const isTall = true;

  const User = { name: "Bowofade", age: 56, link: "https://bowofade.com" };

  return (
    <div className="max-w-5xl mx-auto App">
      <header className="App-header">
        <h1 className="text-2xl font-medium text-center text-green-500">
          {title}
        </h1>
      </header>
      <div className="w-full max-w-5xl p-4 m-4 mx-auto bg-gray-100 shadow-sm rounded-xl">
        <h1 className="text-2xl font-medium text-center text-blue-500 capitalize">
          My name is {name}
        </h1>
        <p>I am {age}years old</p>
        Am I Tall? {isTall ? "Yes" : "No"}
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.floor(Math.random() * 100)}</p>
        <p>{"Hello Ninjas"}</p>
      </div>
      <div className="max-w-md p-4 my-4 space-y-2 text-lg bg-white rounded-md shadow">
        <p>Name: {User.name}</p>
        <p>Age: {User.age}</p>
        <a href={User.link} className="text-blue-500 hover:text-blue-700">
          Link {User.link}
        </a>
      </div>
    </div>
  );
}

export default App;
