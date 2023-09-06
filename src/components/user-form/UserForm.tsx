/* eslint-disable @typescript-eslint/no-explicit-any */
import { db, storage } from "@dashboard/utils/firebase";
import moment from "moment";
import {
  Button,
  Card,
  CardBody,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { doc, getDoc, addDoc, collection, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { User } from "@dashboard/utils/types";
import { ArrowUpTrayIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { defaultImgSrc } from "@dashboard/utils/constants";
import Datepicker from "react-tailwindcss-datepicker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

type Props = {
  edit?: boolean;
};

const UserForm: React.FC<Props> = ({ edit }) => {
  const { id } = useParams<{ id: string }>();
  const [userData, setUserData] = useState<User>();
  const [formData, setFormData] = useState({
    id: "",
    img: "",
    title: "",
    name: "",
    email: "",
    role: "",
    startDate: "",
    endDate: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const history = useHistory();

  const docRef = id ? doc(db, "users", id) : undefined;

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file?.name);
      const uploadTask = file && uploadBytesResumable(storageRef, file);
      uploadTask?.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask?.snapshot.ref).then((downloadURL) => {
            setFormData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  //Quick field validation...
  useEffect(() => {
    setSubmitDisabled(
      Object.values(formData).some((v) => v === "" || v === "Invalid date")
    );
  }, [formData]);

  const [startDateValue, setStartDateValue] = useState({
    startDate: "",
    endDate: "",
  });

  const [endDateValue, setEndDateValue] = useState({
    startDate: "",
    endDate: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const value = e.target.value;
    setFormData({ ...formData, [id]: value });
  };

  const handleStartDateValueChange = (newValue: any) => {
    setStartDateValue(newValue);
    setFormData({
      ...formData,
      startDate: moment(newValue.startDate).format("MM/DD/YY"),
    });
  };

  const handleEndDateValueChange = (newValue: any) => {
    setEndDateValue(newValue);
    setFormData({
      ...formData,
      endDate: moment(newValue.endDate).format("MM/DD/YY"),
    });
  };

  const handleAdd = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users"), {
        ...formData,
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    try {
      const user = doc(db, "users", formData.id);
      await updateDoc(user, {
        ...formData,
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUserDate = async () => {
      try {
        if (docRef) {
          const docSnap = await getDoc(docRef);
          const user: User = {
            id: docSnap.id,
            img: "",
            title: "",
            name: "",
            email: "",
            role: "",
            startDate: "",
            endDate: "",
            ...docSnap.data(),
          };
          setUserData(user);
          setFormData(user);
          setStartDateValue({
            startDate: moment(user.startDate).format("YYYY-MM-DD"),
            endDate: moment(user.startDate).format("YYYY-MM-DD"),
          });
          setEndDateValue({
            startDate: moment(user.endDate).format("YYYY-MM-DD"),
            endDate: moment(user.endDate).format("YYYY-MM-DD"),
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (edit) {
      getUserDate();
    }
  }, []);

  return (
    <Card className="w-full hsm:h-[88%] h-[91%] hlg:h-[94%] pt-2 px-2 lg:px-7 rounded-3xl">
      <div className="rounded-none pt-3 px-3 m-0">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <Typography variant="h3" color="blue-gray">
              {edit ? "Edit Member" : "Add Member"}
            </Typography>
            <Typography color="gray" className="mt-1">
              {edit
                ? "Edit this members information"
                : "Add a new member to our list"}
            </Typography>
          </div>
          <Link to="/">
            <Button className="flex items-center gap-3 bg-[#1e1f24] p-3 lg:px-5 ">
              <ChevronLeftIcon strokeWidth={2} className="h-5 w-5" />
              <Typography color="white" className=" hidden lg:block">
                Back to Members
              </Typography>
            </Button>
          </Link>
        </div>
      </div>
      <CardBody className="h-screen p-0 overflow-auto">
        <div className="flex flex-col md:flex-row gap-5 md:gap-0">
          <div className="flex-[1]">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : userData
                  ? userData.img
                  : defaultImgSrc
              }
              alt="User Image"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover m-auto border-4 border-blue-gray-100"
            />
          </div>
          <div className="flex-[2]">
            <form
              onSubmit={edit ? handleUpdate : handleAdd}
              className="flex flex-wrap gap-4 px-5 md:px-0 w-full [&>*]:xl:w-[48%] pt-4"
            >
              <div className="relative w-full">
                <ArrowUpTrayIcon
                  strokeWidth={3}
                  className="w-7 h-7 absolute right-5 top-2"
                />
                <Input
                  label="Image"
                  id="file"
                  onChange={(e) => e.target.files && setFile(e.target.files[0])}
                  type="file"
                  crossOrigin={undefined}
                />
              </div>
              <Input
                id="title"
                value={formData?.title ?? userData?.title}
                label="title (Mr./Mrs./Ms..etc)"
                onChange={handleInput}
                crossOrigin={undefined}
              />
              <Input
                id="name"
                label="Name"
                value={formData?.name ?? userData?.name}
                onChange={handleInput}
                crossOrigin={undefined}
              />
              <Input
                id="email"
                label="Email"
                type="email"
                value={formData?.email ?? userData?.email}
                onChange={handleInput}
                crossOrigin={undefined}
              />
              <Select
                id="role"
                label="Role"
                value={formData?.role ?? userData?.role}
                onChange={(e: any) => setFormData({ ...formData, role: e })}
              >
                <Option value="Owner">Owner</Option>
                <Option value="Admin">Admin</Option>
                <Option value="Read Only">Read Only</Option>
              </Select>
              <div className="flex flex-col md:flex-row gap-4 w-full [&>*]:border [&>*]:border-blue-gray-200 [&>*]:rounded-lg">
                <Datepicker
                  useRange={false}
                  asSingle={true}
                  value={startDateValue}
                  placeholder={"Start Date"}
                  displayFormat={"MM/DD/YY"}
                  onChange={handleStartDateValueChange}
                />
                <Datepicker
                  useRange={false}
                  asSingle={true}
                  value={endDateValue}
                  primaryColor={"fuchsia"}
                  placeholder={"End Date"}
                  displayFormat={"MM/DD/YY"}
                  onChange={handleEndDateValueChange}
                />
              </div>
              <div className="!w-[99%] text-right">
                <Button
                  type="submit"
                  disabled={submitDisabled}
                  className="bg-[#1e1f24] p-3 !w-full xl:!w-40"
                >
                  <Typography color="white" className="text-center">
                    {edit ? "Update" : "Add"}
                  </Typography>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default UserForm;
