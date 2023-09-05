import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { LayoutContext } from "../LayoutContext";
import {
  UsersIcon,
  Bars3CenterLeftIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import useIsMobile from "@dashboard/utils/hooks/useIsMobile";

export const Sidebar: React.FC = () => {
  const { open, setOpen } = useContext(LayoutContext);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isMobile, setOpen]);

  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } h-screen pb-32 bg-[#1e1f24] p-6 pt-20 pr-0 relative duration-300 flex flex-col justify-between`}
    >
      <Link
        to="/"
        className={`w-full h-16 ${
          open ? "px-7" : "pl-4"
        } bg-white flex justify-start items-center rounded-tl-3xl rounded-bl-3xl gap-5`}
      >
        <UsersIcon strokeWidth={2} className="h-7 w-7" />
        {open && (
          <Typography className="text-[#1e1f24] text-xl font-semibold">
            Members
          </Typography>
        )}
      </Link>
      <div className={`text-white flex flex-col ${open ? "gap-2" : "gap-6"}`}>
        <Button
          className={`flex items-center gap-3 bg-[#1e1f24] ${
            open ? "px-4" : "p-1"
          } `}
        >
          <Cog6ToothIcon strokeWidth={2} className="h-6 w-6" />
          {open && <Typography color="white">Settings</Typography>}
        </Button>
        <Button
          className={`flex items-center gap-3 bg-[#1e1f24] ${
            open ? "px-4" : "p-1"
          } `}
        >
          <ArrowLeftOnRectangleIcon strokeWidth={2} className="h-6 w-6" />
          {open && <Typography color="white">Logout</Typography>}
        </Button>
      </div>
      <div className="absolute top-4 right-4">
        {!isMobile && (
          <Tooltip content={open ? "Collapse" : "Expand"}>
            <IconButton
              onClick={() => setOpen(!open)}
              variant="text"
              className="bg-white hover:bg-white rounded-tl-3xl rounded-bl-3xl mr-[-1rem]"
            >
              <Bars3CenterLeftIcon strokeWidth={2} className="h-7 w-7" />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </div>
  );
};
