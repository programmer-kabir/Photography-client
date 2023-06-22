import React from "react";
import useMenu from "../../../Hooks/useMenu";
import { Button, Card } from "flowbite-react";

const TopInstractor = () => {
    const [classes] = useMenu()
  return (
    <div>
      <div className="text-center mb-4 space-y-3">
        <h2 className="text-center text-4xl font-semibold text-black mt-16">
        Popular Instructors Section
        </h2>
        <p>top Instructors basic student</p>
      </div>
        <div className="grid grid-cols1 grid-cols-3 gap-5">
        {classes.map((item) => (
            <Card key={item._id}>
              <img src={item.InstructorImage} className="h-[250px] rounded" alt="" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Name: {item.Instructor}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                 Email:{item.InstructorEmail}
              </p>
              
            </Card>
          ))}
        </div>
    </div>
  );
};

export default TopInstractor;
