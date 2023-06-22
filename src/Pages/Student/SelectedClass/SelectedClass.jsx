
import { useQuery } from "@tanstack/react-query";
import { Button, Checkbox, Table } from "flowbite-react";
import React, { useState } from "react";
import { MdDeleteForever, MdPayment } from "react-icons/md";
import Swal from "sweetalert2";
import useSlected from "../../../Hooks/useSlected";
import { Link } from "react-router-dom";

const SelectedClass = () => {
  const [selected, refetch] = useSlected();
  const [price, setPrice] = useSlected('')
  const handleDelete = (select) => {
    // console.log(select._id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selected/${select._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-full">
      
      <Table>
        <Table.Head>
          <Table.HeadCell className="!p-4"></Table.HeadCell>
          <Table.HeadCell>Class Name</Table.HeadCell>
          <Table.HeadCell>Class Image</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {selected.map((select, index) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={select._id}
            >
              <Table.Cell className="!p-4">{index + 1}</Table.Cell>

              <Table.Cell>{select.Name}</Table.Cell>
              <Table.Cell>
                <img className="w-10 h-8 rounded-md" src={select.Image} alt="" />
              </Table.Cell>
              <Table.Cell>${select.price}</Table.Cell>
              <Table.Cell className="flex gap-4">
                <Button
                  onClick={() => handleDelete(select)}
                  className="btn"
                  size="xs"
                >
                  <MdDeleteForever className="mx-auto h-5 w-5"></MdDeleteForever>
                  <span className="text-sm">Delete</span>
                </Button>
                <Link to={`../payment/${select._id}`}>
                <Button
                  className="btn"
                  
                  size="xs"
                >
                  <MdPayment className="mx-auto h-5 w-5"></MdPayment>{" "}
                  <span className="text-sm">Payment</span>
                </Button></Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default SelectedClass;
