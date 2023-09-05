import React, { useContext } from "react";
import { BellIcon, CubeTransparentIcon } from "@heroicons/react/24/solid";
import {
  Avatar,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { LayoutContext } from "../LayoutContext";

export const Header: React.FC = () => {
  const loggedInUser = {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    role: "Admin",
  };

  const { open } = useContext(LayoutContext);

  return (
    <div className="flex justify-between items-center text-white w-full h-24 bg-[#1e1f24] pb-2">
      <div className="flex gap-52 items-center tracking-widest">
        <CubeTransparentIcon className="h-16 w-16 ml-5" />
        {open && <div className="text-4xl font-semibold">Dashboard</div>}
      </div>
      <div className="flex items-center">
        <Tooltip content="Notifications">
          <IconButton variant="text" color="white">
            <BellIcon className="h-7 w-7" />
          </IconButton>
        </Tooltip>
        <div className="flex items-center gap-3 hover:bg-white/10 p-3 px-5 rounded-md transition cursor-pointer lg:mr-5">
          <div className="flex flex-col">
            <Typography variant="small" className="font-normal text-right">
              {loggedInUser.name}
            </Typography>
            <Typography
              variant="small"
              className="font-normal opacity-70 text-right"
            >
              {loggedInUser.role}
            </Typography>
          </div>
          <Avatar src={loggedInUser.img} alt={loggedInUser.name} size="md" />
        </div>
      </div>
    </div>
  );
};
