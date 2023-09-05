import { Card, CardBody } from "@material-tailwind/react";
import React from "react";

type Props = {
  edit?: boolean;
};

const UserForm: React.FC<Props> = ({ edit }) => {
  return (
    <Card className="w-full h-[94%] pt-2 px-2 lg:px-7 rounded-3xl">
      <div>
        <div className="text-4xl text-blue-gray-900 p-10">UserForm</div>
      </div>
      <CardBody className="p-0 overflow-auto">
        <div className="text-4xl text-blue-gray-900 p-10">
          Edit: {edit ? "true" : "false"}
        </div>
      </CardBody>
    </Card>
  );
};

export default UserForm;
