import { PencilIcon, UserPlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { colors } from "@material-tailwind/react/types/generic";

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
    <Card className="w-full h-full">
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none pt-5 px-3 min-h-[125px]"
      >
        <div className="mb-4 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h3" color="blue-gray">
              Members list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal font-">
              See information about all members
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button className="flex items-center gap-3 bg-blue-800" size="lg">
              <UserPlusIcon strokeWidth={2} className="h-5 w-5" /> Add member
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-0 overflow-auto pt-0">
        <table className="mt-4 w-full min-w-max table-auto text-left relative">
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
                    className="font-normal leading-none"
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
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
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
