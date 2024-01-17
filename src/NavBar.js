export default function NavBar() {
  return (
    <div>
      <nav className="flex items-center justify-between p-3 text-white bg-blue-600">
        <a href="/" className="font-medium text-blue-700">
          My Website
        </a>
        <ul className="flex space-x-3">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
