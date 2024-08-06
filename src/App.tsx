/**
 * A function component representing the main App.
 *
 * @return {TSX.Element} The main App component
 */

import Hello from "./components/Hello";

function App() {
  return (
    <>
      <Hello />
      <h2>Seccond components</h2>
      <Hello />
    </>
  );
}

export default App;
