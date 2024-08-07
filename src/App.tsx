/**
 * A function component representing the main App.
 *
 * @return {TSX.Element} The main App component
 */

const me = {
  name: "Adeoluwa Oyekunmi",
  isTall: false,
  age: 67,
};

import Hello from "./components/Hello";
import NewComp from "./components/NewComp";
import Destructuring from "./components/Destructuring";
import User from "./components/User";
import List from "./components/List";
import Ternary from "./components/Ternary";
import ConditionalRender from "./components/ConditionalRender";

interface User {
  name: string;
  avatar?: string;
  age: number;
  email: string;
}

const baseAvatarUrl = "https://picsum.photos/id/";

const users: User[] = [
  {
    name: "John Doe",
    avatar: `${baseAvatarUrl}1/200/300`,
    age: 28,
    email: "john.doe@example.com",
  },
  {
    name: "Jane Smith",
    avatar: `${baseAvatarUrl}2/200/300`,
    age: 34,
    email: "jane.smith@example.com",
  },
  {
    name: "Alice Johnson",
    avatar: `${baseAvatarUrl}3/200/300`,
    age: 45,
    email: "alice.johnson@example.com",
  },
  {
    name: "Bob Brown",
    avatar: `${baseAvatarUrl}4/200/300`,
    age: 22,
    email: "bob.brown@example.com",
  },
  {
    name: "Charlie Davis",
    avatar: `${baseAvatarUrl}5/200/300`,
    age: 30,
    email: "charlie.davis@example.com",
  },
  {
    name: "David Evans",
    avatar: `${baseAvatarUrl}6/200/300`,
    age: 36,
    email: "david.evans@example.com",
  },
  {
    name: "Ella Garcia",
    avatar: `${baseAvatarUrl}7/200/300`,
    age: 29,
    email: "ella.garcia@example.com",
  },
  {
    name: "Frank Harris",
    avatar: `${baseAvatarUrl}8/200/300`,
    age: 41,
    email: "frank.harris@example.com",
  },
  {
    name: "Grace Lee",
    avatar: `${baseAvatarUrl}9/200/300`,
    age: 25,
    email: "grace.lee@example.com",
  },
  {
    name: "Henry Miller",
    avatar: `${baseAvatarUrl}10/200/300`,
    age: 50,
    email: "henry.miller@example.com",
  },
  {
    name: "Ivy Nelson",
    avatar: `${baseAvatarUrl}11/200/300`,
    age: 31,
    email: "ivy.nelson@example.com",
  },
  {
    name: "Jack Olson",
    avatar: `${baseAvatarUrl}12/200/300`,
    age: 38,
    email: "jack.olson@example.com",
  },
  {
    name: "Katie Parker",
    avatar: `${baseAvatarUrl}13/200/300`,
    age: 27,
    email: "katie.parker@example.com",
  },
  {
    name: "Leo Quinn",
    avatar: `${baseAvatarUrl}14/200/300`,
    age: 43,
    email: "leo.quinn@example.com",
  },
  {
    name: "Mia Reed",
    avatar: `${baseAvatarUrl}15/200/300`,
    age: 24,
    email: "mia.reed@example.com",
  },
  {
    name: "Nina Scott",
    avatar: `${baseAvatarUrl}16/200/300`,
    age: 33,
    email: "nina.scott@example.com",
  },
  {
    name: "Owen Taylor",
    avatar: `${baseAvatarUrl}17/200/300`,
    age: 47,
    email: "owen.taylor@example.com",
  },
  {
    name: "Paul Underwood",
    avatar: `${baseAvatarUrl}18/200/300`,
    age: 52,
    email: "paul.underwood@example.com",
  },
  {
    name: "Quincy Vance",
    avatar: `${baseAvatarUrl}19/200/300`,
    age: 40,
    email: "quincy.vance@example.com",
  },
  {
    name: "Ruby Wilson",
    avatar: `${baseAvatarUrl}20/200/300`,
    age: 26,
    email: "ruby.wilson@example.com",
  },
];

function App() {
  console.log(typeof users);
  return (
    <>
      <div className="space-y-4">
        <ConditionalRender />
        <Hello />
        <h2>Second components</h2>
        {/* new components here */}
        <NewComp {...me} />
        <NewComp name="Bowofade" isTall={true} age={45} />
        <Destructuring name="Adekunle" isTall={false} age={34} />

        {/* new how to list items */}

        <div className="w-full gap-8 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user, i) => (
            <User key={i} {...user} />
          ))}
        </div>

        {/* lif of food */}
        <List />

        {/* conditional rendering */}
        <Ternary />
      </div>
    </>
  );
}

export default App;
