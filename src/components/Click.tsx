function handleClick() {
  alert("This is a reference function");
}

export default function Click() {
  return (
    <div className="w-full max-w-screen-lg mx-auto flex gap-5 items-center">
      <button
        className="rounded text-white bg-blue-500 px-4 py-2 text-center w-48"
        onClick={() => alert("I am clicked")}
      >
        Anonymous function
      </button>
      <button
        className="rounded text-white bg-purple-500 px-4 py-2 text-center w-48"
        onClick={handleClick}
      >
        Reference function
      </button>
    </div>
  );
}
