type User = {
  name: string;
  isTall: boolean;
  age: number;
};

export default function NewComp(props: User) {
  return (
    <div className="bg-white py-4 text-center w-[400px] mx-auto rounded-lg shadow">
      <h1 className="text-2xl font-medium my-4 p-4  text-blue-500">
        Hello {props.name}, your age is {props.age}
      </h1>
    </div>
  );
}
