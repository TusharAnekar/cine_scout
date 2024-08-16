import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between py-4 text-gray-300">
      <p>Logo</p>

      <div className="flex gap-4">
        <NavLink to={"/"}>Movies</NavLink>
        <NavLink to={"/"}>TV Shows</NavLink>
        <NavLink to={"/"}>Suggest me</NavLink>
      </div>
    </header>
  );
};

export { Header };
