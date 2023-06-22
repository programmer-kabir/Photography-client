import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxoisSecure from "./useAxouise";

const useSlected = () => {
  const { user,loading } = useContext(AuthContext);
  // console.log(user);
  const [axiosSecure] = useAxoisSecure()
  const {
    refetch,
    data: selected = [],
    
  } = useQuery({
    queryKey: ["selected",user?.email],
    enabled : !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure(`/selected?email=${user?.email}`);
      // console.log(res);
      return res.data;
    },
  });
  // console.log(selected);
  return [selected, refetch];
};

export default useSlected;
