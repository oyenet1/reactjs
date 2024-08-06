### Props in typescript

```tsx
interface User {
  name: string;
  isTall: boolean;
  age: number;
}

export default function NewComp(props: User) {
  return (
    <>
      <h1 className="text-2xl font-medium my-4 p-4 bg-green-500 text-white">
        Hello {props.name}
      </h1>
    </>
  );
}
```

** Usage **

```tsx

```