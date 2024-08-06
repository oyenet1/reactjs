type User = {
  name: string;
  isTall?: boolean;
  age: number;
};

export default function NewComp(props: User) {
  const { name, age } = props;
  return (
    <div className="bg-white py-4 text-center w-[400px] mx-auto rounded-lg shadow">
      <h1 className="text-2xl font-medium my-4 p-4  text-blue-500">
        Where are you coming from {name}, your age is now {age}, you suppose to
        be wise by now
      </h1>
    </div>
  );
}
