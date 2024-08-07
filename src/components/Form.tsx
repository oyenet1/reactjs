import { useState } from "react";
let word: string = "";

export default function Form() {
  const [name, setName] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setName(e.target.value);
    word = e.target.value;
  }

  return (
    <div>
      <form className="max-w-[400px] bg-white grid grid-cols-1 gap-6 my-4 p-6 rounded">
        <h1 className="text-2xl font-medium">Form Examples</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e)}
          className="w-full rounded-md border px-3 py-2"
        />

        {word.length > 0 && <h1 className="p-2">Result: {name}</h1>}
      </form>
    </div>
  );
}
