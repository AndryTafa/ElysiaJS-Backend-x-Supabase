import { Elysia } from 'elysia';
import { userRoutes } from './routes/userRoutes';
import { supabase } from './libs/supabase';
import './libs/supabase';

const app = new Elysia()
    .listen(8080);
console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
userRoutes(app, supabase);

