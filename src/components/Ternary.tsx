const isHappy: boolean = false;
export default function Ternary() {
  return (
    <div className="pt-8 mx-auto max-w-screen-lg">
      {isHappy ? (
        <h1 className="text-2xl">I am happy</h1>
      ) : (
        <h2 className="text-red-500 text-2xl">You are sad</h2>
      )}
    </div>
  );
}
