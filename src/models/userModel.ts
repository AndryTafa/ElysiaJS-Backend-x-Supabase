export type UserModel = {
    id: number;
    created_at: string;
    username: string;
    password: string;
};

export type CreateUserModel = {
    username: string;
    password: string;
};

export type UpdateUserModel = Partial<CreateUserModel>;