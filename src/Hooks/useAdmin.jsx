import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxoisSecure from './useAxouise';
import { AuthContext } from '../Provider/AuthProvider';

const useAdmin = () => {
  const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxoisSecure()
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            // console.log('is admin response', res.data.admin)
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;
