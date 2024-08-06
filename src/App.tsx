/**
 * A function component representing the main App.
 *
 * @return {TSX.Element} The main App component
 */

const me = {
  name: "Adeoluwa Oyekunmi",
  isTall: false,
  age: 67,
};

import Hello from "./components/Hello";
import NewComp from "./components/NewComp";

function App() {
  return (
    <>
      <div className="space-y-4">
        <Hello />
        <h2>Second components</h2>
        {/* new components here */}
        <NewComp {...me} />
        <NewComp name="Bowofade" isTall={true} age={45} />
      </div>
    </>
  );
}

export default App;
