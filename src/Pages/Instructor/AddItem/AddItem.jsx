import { Button, FileInput, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxoisSecure from "../../../Hooks/useAxouise";

const AddItem = () => {
  const { user } = useContext(AuthContext);
  const {axiosSecure} = useAxoisSecure()
  // console.log(image_token);


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
// 

  };

  return (
    <div className="mx-6 w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 my-5"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <div className="mb-2 block">
              <Label value="Class name" />
            </div>
            <TextInput
              type="text"
              name="Name"
              {...register("Name", { required: true })}
              placeholder="Name"
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label value="Instructor Name" />
            </div>
            <TextInput
              type="text"
              name="instructorName"
              defaultValue={user.displayName}
              placeholder="Instructor Name "
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label value="Email" />
            </div>
            <TextInput
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="Instructor  email"
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label value="Price" />
            </div>
            <TextInput
              type="text"
              name="price"
              placeholder="Price"
              {...register("price", { required: true })}
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label value="Available Sits" />
            </div>
            <TextInput
              type="text"
              name="Sits"
              {...register("Sits", { required: true })}
              placeholder="Available Sits"
              required={true}
            />
          </div>
        </div>
        <div>
          <div className="w-full" id="fileUpload">
            <div className="mb-2 block">
              <Label htmlFor="file" value="Upload file" />
            </div>
          
            <TextInput
              type="text"
              name="image"
              {...register("image", { required: true })}
              placeholder="Image Links"
              required={true}
            />

          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddItem;
