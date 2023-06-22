import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxoisSecure from './useAxouise';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxoisSecure()
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            // console.log('is Instructor response', res.data.instructor)
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;