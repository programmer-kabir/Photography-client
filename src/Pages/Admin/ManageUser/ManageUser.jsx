import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "flowbite-react";
import React from "react";
import { MdDeleteForever, MdPayment } from "react-icons/md";

const ManageUser = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = user =>{
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method:'PATCH'
    })
    .then(res => res.json())
    .then(data =>{
        if(data.modifiedCount){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an admin`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }
  const handleInstructor = user =>{
    fetch(`http://localhost:5000/users/instructor/${user._id}`,{
        method:'PATCH'
    })
    .then(res => res.json())
    .then(data =>{
        if(data.modifiedCount){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an instructor`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }


  return (
    <div className="w-full ">
      <h2 className="text-3xl font-semibold mb-8">
        Total User :{users.length}
      </h2>
      <Table>
        <Table.Head>
          <Table.HeadCell className="!p-4"></Table.HeadCell>
          <Table.HeadCell>NAME</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Roll</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {users.map((user, index) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={user._id}
            >
              <Table.Cell className="!p-1">{index + 1}</Table.Cell>

              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell className="flex gap-2">
                {user.role === 'admin'? 'admin':<>
                <Button
                // role={}
                  onClick={() => handleMakeAdmin(user)}
                  className="btn"
                  size="xs"
                >Make Admin
                </Button></>}

                {user.role === 'instructor'? 'instructor':<>
                <Button
                  onClick={() => handleInstructor(user)}
                  className="btn"
                  size="xs"
                >Make Instructor
                </Button></>}
                
              </Table.Cell>
              <Table.Cell className="flex gap-5">
                <Button
                  onClick={() => handleDelete(user)}
                  className="btn"
                  size="xs"
                >
                  <MdDeleteForever className="mx-auto h-5 w-5"></MdDeleteForever>
                  <span className="text-sm">Delete</span>
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ManageUser;
