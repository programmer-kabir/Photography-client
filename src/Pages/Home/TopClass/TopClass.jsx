import { Button, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import useMenu from "../../../Hooks/useMenu";

const TopClass = () => {
const [classes] = useMenu()
  return (
    <div className="">
      <div className="text-center mb-4 space-y-3">
        <h2 className="text-center text-4xl font-semibold text-black">
          Top Classes
        </h2>
        <p>top classes basic student</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {classes.map((item) => (
          <Card key={item._id}>
            <img src={item.Image} className="h-[250px] rounded" alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             Course Name: {item.Name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Instructor name : {item.Instructor}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Available seats : {item.AvailableSits}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Price:{item.price}
            </p>
           
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TopClass;
