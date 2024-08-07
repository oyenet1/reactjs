import { useState } from "react";

export default function Form() {
  const [name, setName] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log([e, e.target.value]);
    setName(e.target.value);
  }
  return (
    <div>
      <form className="max-w-screen-sm bg-white grid grid-cols-1 gap-6 my-4 p-6 rounded">
        <h1 className="text-2xl font-medium">Form Examples</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e)}
          className="w-full rounded-md shadow"
        />
      </form>
    </div>
  );
}
