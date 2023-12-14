import { Elysia } from 'elysia';
import { userController } from '../controllers/userController';
import { SupabaseClient } from '@supabase/supabase-js';
import {CreateUserModel, UpdateUserModel} from '../models/userModel';

export const userRoutes = (app: Elysia, supabase: SupabaseClient) => {
    const { getUserByIdFromDB, getAllUsers, createUser, updateUser, deleteUser, deleteAllUsers } = userController(supabase);

    app.group('/users', userGroup => { userGroup
        .get('/:id', async ({ params }) => getUserByIdFromDB(params.id))
        .get('/', async () => getAllUsers())
        .post('/', async ({ body }) => {return createUser(body as CreateUserModel); })
        .patch('/:id', async ({ params, body }) => updateUser(params.id, body as UpdateUserModel))
        .delete('/:id', async ({ params }) => deleteUser(params.id))
        .delete('/', async () => deleteAllUsers());

        return userGroup;
    });
};
