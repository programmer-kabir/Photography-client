import { Button, Card } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useMenu from "../../Hooks/useMenu";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const ClassPage = () => {
  const {user} = useContext(AuthContext)
  const [classes] = useMenu();
  const [disable, setDisable] = useState(false)

  const handleSelect = (item) =>{
    // console.log(item);
    const email = user.email
    const {_id,Name,Instructor,Image,AvailableSits,EnrolStudent,price,} = item
    const select = {Name,Instructor,Image,AvailableSits,EnrolStudent,price,email}
    // console.log(select);
    fetch('http://localhost:5000/selected',{
      method:'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body:JSON.stringify(select)
    })
    .then(res => res.json())
      .then(data =>{
        console.log(data);
        if(data.insertedId){
          setDisable(false)
          Swal.fire(
            'Yahh!',
            'You Class has been added!',
            'success'
          )
        }
      })
    
  }

  return (
    <div>
      <h2 className="mt-16"> csfsa</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {classes.map((item) => (
          <Card key={item._id}>
            <img src={item.Image} className="h-[250px] rounded" alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Name: {item.Name}
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
            <Button onClick={()=>handleSelect(item)} disable={true} >Select</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClassPage;
