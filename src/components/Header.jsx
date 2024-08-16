import { NavLink } from "react-router-dom";

import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";

const Header = () => {
  return (
    <header className="flex justify-between py-4 text-gray-300">
      <PlayCircleFilledWhiteOutlinedIcon />

      <div className="flex gap-4">
        <NavLink to={"/"}>Movies</NavLink>
        <NavLink to={"/"}>TV Shows</NavLink>
        <NavLink to={"/"}>Suggest me</NavLink>
      </div>
    </header>
  );
};

export { Header };
