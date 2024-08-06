interface User {
  name: string;
  avatar?: string;
  age: number;
  email: string;
}
export default function User({ name, avatar, age, email }: User) {
  return (
    <div className="bg-gray-50 flex space-x-4 items-center space-y-4 text-gray-600 rounded-lg shadow p-6">
      <img
        src={avatar}
        alt={name}
        className="rounded-full object-cover h-20 aspect-square shadow"
      />

      <div className="">
        <h1 className="text-xl font-medium">{name}</h1>
        <p>{email}</p>
        <p className="text-blue-600">{age}</p>
      </div>
    </div>
  );
}
