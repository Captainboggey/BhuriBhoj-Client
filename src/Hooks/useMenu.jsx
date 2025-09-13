import React from 'react';
import axiosPublic from './axiosPublic';
import { useQuery } from '@tanstack/react-query';

const useMenu = () => {
    const useAxiosPublic = axiosPublic();

    const { data: menu=[], refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const result = await useAxiosPublic('/menu')
            return result.data
        }
    })
    return [menu, refetch]
};

export default useMenu;