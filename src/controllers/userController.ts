import { SupabaseClient } from '@supabase/supabase-js';
import { CreateUserModel, UpdateUserModel } from '../models/userModel';
import { errorResponse, handleSupabaseRequest } from '../utils/responseUtils';

export const userController = (supabase: SupabaseClient) => {
    const getUserById = (id: string) => {
        return handleSupabaseRequest(
            supabase.from('Users').select('*').eq('id', id).single()
        );
    };

    const getAllUsers = () => {
        return handleSupabaseRequest(supabase.from('Users').select('*'));
    };

    const createUser = (userData: CreateUserModel) => {
        if (!userData.username || !userData.password) {
            return Promise.resolve(errorResponse(new Error('Username and password are required'), 400));
        }
        return handleSupabaseRequest(supabase.from('Users').insert([userData]));
    };

    const updateUser = (id: string, userData: UpdateUserModel) => {
        return handleSupabaseRequest(supabase.from('Users').update(userData).eq('id', id));
    };

    const deleteUserById = (id: string) => {
        return handleSupabaseRequest(supabase.from('Users').delete().eq('id', id));
    };

    const deleteAllUsers = () => {
        return handleSupabaseRequest(supabase.from('Users').delete().not('id', 'is', null));
    };

    return {
        getUserByIdFromDB: getUserById,
        getAllUsers,
        createUser,
        updateUser,
        deleteUser: deleteUserById,
        deleteAllUsers,
    };
};
