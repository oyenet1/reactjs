const isHappy: boolean = false;
export default function Ternary() {
  return (
    <div>
      {isHappy ? (
        <h1 className="text-2xl">I am happy</h1>
      ) : (
        <h2>You are sad</h2>
      )}
    </div>
  );
}
