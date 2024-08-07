import { useState } from "react";

interface Form {
  email: string;
  password: string;
}

const input = {
  email: "",
  password: "",
};

export default function Login() {
  const [form, setForm] = useState<Form>(input);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form className="min-w-[500px] bg-white grid grid-cols-1 gap-6 my-4 p-6 rounded-lg shadow">
        <h1 className="text-2xl font-medium">Login Page</h1>
        <input
          type="email"
          value={form.email}
          placeholder="Email address"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-md border px-3 py-2"
        />
        <input
          type="password"
          value={form.password}
          placeholder="*******"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-md border px-3 py-2"
        />
        <button
          className="bg-blue-600 max-w-max inline-block mx-auto text-white px-8 py-2 rounded-md"
          onClick={() => console.log(form)}
        >
          Login
        </button>
      </form>
    </div>
  );
}
