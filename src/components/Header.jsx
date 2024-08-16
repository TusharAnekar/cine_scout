import { NavLink, useNavigate } from "react-router-dom";

import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";

const Header = () => {
  const navigate = useNavigate();

  function handleHomeLogo() {
    navigate("/");
  }

  return (
    <header className="flex justify-between py-4 text-gray-300">
      <button onClick={handleHomeLogo}>
        <PlayCircleFilledWhiteOutlinedIcon />
      </button>

      <div className="flex gap-4">
        <NavLink to={"/"}>Movies</NavLink>
        <NavLink to={"/"}>TV Shows</NavLink>
        <NavLink to={"/"}>Suggest me</NavLink>
      </div>
    </header>
  );
};

export { Header };
