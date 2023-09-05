import { PencilIcon, UserPlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Typography,
  Button,
  CardBody,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { colors } from "@material-tailwind/react/types/generic";
import { Link } from "react-router-dom";

const TABLE_HEAD = ["Member", "Team Role", "Start Date", "End Date", "Actions"];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    title: "Mr.",
    name: "John Michael",
    email: "john@creative-tim.com",
    role: "Owner",
    startDate: "23/04/18",
    endDate: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    title: "Ms.",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    role: "Admin",
    startDate: "23/04/18",
    endDate: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    title: "Mrs.",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    role: "Read Only",
    startDate: "19/09/17",
    endDate: "19/09/17",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    title: "Mr.",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    role: "Admin",
    startDate: "24/12/08",
    endDate: "24/12/08",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    title: "Mr.",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    role: "Read Only",
    startDate: "04/10/21",
    endDate: "04/10/21",
  },
];

const currentRoleTagColor: { [key: string]: colors } = {
  Owner: "blue",
  Admin: "green",
  "Read Only": "blue-gray",
};

const UsersTable = () => {
  return (
    <Card className="w-full h-[94%] pt-2 px-2 lg:px-7 rounded-3xl">
      <div className="rounded-none pt-3 px-3 m-0 mb-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <Typography variant="h3" color="blue-gray">
              Members list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal lg:block">
              See information about all members
            </Typography>
          </div>
          <Link to="add">
            <Button className="flex items-center gap-3 bg-[#1e1f24] p-3 lg:px-5 ">
              <UserPlusIcon strokeWidth={2} className="h-5 w-5" />
              <Typography color="white" className=" hidden lg:block">
                Add member
              </Typography>
            </Button>
          </Link>
        </div>
      </div>
      <CardBody className="p-0 overflow-auto">
        <table className="w-full min-w-max table-auto text-left">
          <thead className="sticky top-0 z-10">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 py-5"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-semibold leading-none"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="z-0">
            {TABLE_ROWS.map(
              ({ img, name, email, role, startDate, endDate }) => {
                const classes = "p-4 border-b border-blue-gray-50";
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={role}
                          color={currentRoleTagColor[role]}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {startDate}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {endDate}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <Link to="edit">
                          <IconButton variant="text">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Link>
                      </Tooltip>
                      <Tooltip content="Delete User">
                        <IconButton
                          variant="text"
                          color="red"
                          className="hover:bg-[#e65100] hover:text-white"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default UsersTable;
