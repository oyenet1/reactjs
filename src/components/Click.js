import { useState } from "react";

const Click = () => {
  let [name, setName] = useState("Akindele");
  const handleClick = () => setName("luigi");
  return (
    <div className="space-y-3">
      <p>Name is {name}</p>
      <button
        onClick={(e) => handleClick("Banji", e)}
        className="px-4 py-2 text-sm text-white bg-green-600 rounded-lg shadow-sm"
      >
        Event
      </button>
      <div className="max-w-md p-4 text-gray-500 rounded shadow bg-gray-50">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nobis
          quidem temporibus ipsum eos soluta molestiae dicta aut itaque! Numquam
          enim ratione corrupti labore, sint adipisci nihil veniam dolorem sed.
        </p>
      </div>
    </div>
  );
};

export default Click;
