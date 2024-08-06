const myName: string = "Bowofade Oyerinde";

export default function Hello() {
  return (
    <>
      <h1 className="text-2xl font-medium my-4 p-4 bg-green-500 text-white">
        Hello World! from {myName}, I am ouputting another contents{" "}
        {3 == 3 ? "yes" : "No"}
      </h1>
    </>
  );
}
