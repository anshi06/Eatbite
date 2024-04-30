import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const AdminNavbar = ({ handleOpenSideBar }) => {
  return (
    <div className="lg:hidden px-5 z-50 py-[.8rem] bg-[#C5A34F]  lg:px-20 flex justify-between">
      <div className="flex items-center space-x-4">
        <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
          <IconButton onClick={handleOpenSideBar}>
            <MenuIcon />
          </IconButton>
          <li className="logo font-semibold text-gray-300 text-2xl">Eatbite</li>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
