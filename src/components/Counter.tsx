import { useState } from "react";

export default function Click() {
  const [count, setCount] = useState<number>(0);
  const [incrementBy, setIncrementBy] = useState<number>(1);

  /**
   * Increments the count by 1.
   *
   * @return {void} No return value
   */

  function increament(): void {
    setCount(count + incrementBy);
  }
  function decreament(): void {
    setCount(count - incrementBy);
  }

  function plus(): void {
    setIncrementBy(incrementBy + 1);
  }
  function minus(): void {
    setIncrementBy(incrementBy - 1);
  }

  return (
    <div className="w-full max-w-screen-lg mx-auto space-y-4">
      <div className="p-6 rounded bg-white min-w-max flex gap-5 items-center max-w-max">
        <button
          className="rounded text-white bg-red-500 px-4 py-2 text-center"
          onClick={decreament}
        >
          -
        </button>
        <p className="text-xl">The count value is {count}</p>
        <button
          onClick={increament}
          className="rounded text-white bg-green-500 px-4 py-2 text-center"
        >
          +
        </button>
      </div>
      <div className="p-6 rounded bg-white min-w-max flex gap-5 items-center max-w-max">
        <button
          className="rounded text-white bg-red-700 px-4 py-2 text-center"
          onClick={minus}
        >
          -
        </button>
        <p className="text-xl">Increment value: {incrementBy}</p>
        <button
          onClick={plus}
          className="rounded text-white bg-green-700 px-4 py-2 text-center"
        >
          +
        </button>
      </div>
    </div>
  );
}
