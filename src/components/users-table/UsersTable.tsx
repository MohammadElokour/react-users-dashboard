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
  Dialog,
  CardFooter,
} from "@material-tailwind/react";
import { colors } from "@material-tailwind/react/types/generic";
import { Link } from "react-router-dom";
import { db } from "@dashboard/utils/firebase";
import { useEffect, useState } from "react";
import { User } from "@dashboard/utils/types";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { defaultImgSrc } from "@dashboard/utils/constants";

const TABLE_HEAD = ["Member", "Team Role", "Start Date", "End Date", "Actions"];

const currentRoleTagColor: { [key: string]: colors } = {
  Owner: "blue",
  Admin: "green",
  "Read Only": "blue-gray",
};

const UsersTable = () => {
  const [data, setData] = useState<User[]>([]);
  const [userId, setUserId] = useState<string | undefined>();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleOpenDeleteDialog = (id?: string) => {
    setUserId(id);
    setOpenDeleteDialog((current) => !current);
  };

  const handleDeleteUser = async (id?: string) => {
    try {
      if (id) {
        await deleteDoc(doc(db, "users", id));
        setData(data.filter((user) => user.id !== id));
        setOpenDeleteDialog(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const usersList: User[] = [];
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          usersList.push({
            id: doc.id,
            img: "",
            title: "",
            name: "",
            email: "",
            role: "",
            startDate: "",
            endDate: "",
            ...doc.data(),
          });
        });
        setData(usersList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Card className="w-full hsm:h-[88%] h-[91%] hlg:h-[93%] pt-2 px-2 lg:px-7 rounded-3xl">
      <div className="rounded-none pt-3 px-3 m-0 mb-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <Typography variant="h3" color="blue-gray">
              Members list
            </Typography>
            <Typography color="gray" className="mt-1">
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
            {data.map(({ id, img, name, email, role, startDate, endDate }) => {
              const classes = "p-4 border-b border-blue-gray-50";
              return (
                <tr key={id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={img ? img : defaultImgSrc}
                        alt={name}
                        size="sm"
                      />
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
                      <Link to={`edit/${id}`}>
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Link>
                    </Tooltip>
                    <Tooltip content="Delete User">
                      <IconButton
                        onClick={() => handleOpenDeleteDialog(id)}
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
            })}
          </tbody>
        </table>
      </CardBody>
      <Dialog
        size="xs"
        open={openDeleteDialog}
        handler={handleOpenDeleteDialog}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h3">Confirm</Typography>
            Are you sure you want to delete this user?
          </CardBody>
          <CardFooter className="pt-0 flex gap-4">
            <Button
              variant="gradient"
              color="gray"
              onClick={() => handleOpenDeleteDialog()}
              fullWidth
            >
              Cancel
            </Button>
            <Button
              variant="gradient"
              color="red"
              onClick={() => handleDeleteUser(userId)}
              fullWidth
            >
              Delete
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </Card>
  );
};

export default UsersTable;
